import {
  useLayoutEffect,
  useRef,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from "react";

export const ScrollStackItem = ({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

type Transform = {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
};

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
  style?: CSSProperties;
};

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
  style,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const smoothedScrollRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const lastFrameTimeRef = useRef(0);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTopsRef = useRef<number[]>([]);
  const endTopRef = useRef(0);
  const lastTransformsRef = useRef(new Map<number, Transform>());

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    }
    const scroller = scrollerRef.current;
    return {
      scrollTop: scroller?.scrollTop ?? 0,
      containerHeight: scroller?.clientHeight ?? 0,
    };
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback((overrideScrollTop?: number) => {
    if (!cardsRef.current.length) return;

    const raw = getScrollData();
    const containerHeight = raw.containerHeight;
    const scrollTop = overrideScrollTop ?? raw.scrollTop;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endTopRef.current;

    cardsRef.current.forEach((card, i) => {
      const cardTop = cardTopsRef.current[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardTopsRef.current[j] ?? 0;
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform: Transform = {
        translateY: Math.round(translateY),
        scale: Math.round(scale * 10000) / 10000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const last = lastTransformsRef.current.get(i);
      const hasChanged =
        !last ||
        Math.abs(last.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(last.scale - newTransform.scale) > 0.001 ||
        Math.abs(last.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(last.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
  ]);

  // Easing + lerp loop: smoothed value chases the real scroll position with a
  // frame-rate independent factor and a hard speed cap so fast flicks stay fluid.
  const tick = useCallback(
    (now: number) => {
      animationFrameRef.current = null;

      const { scrollTop: target } = getScrollData();
      const last = lastFrameTimeRef.current || now;
      const dt = Math.min(64, Math.max(1, now - last));
      lastFrameTimeRef.current = now;

      let current = smoothedScrollRef.current;
      if (current === null) current = target;

      const distance = target - current;
      const absDistance = Math.abs(distance);

      if (absDistance < 0.25) {
        current = target;
      } else {
        // exponential ease, normalised to 60fps frames
        const smoothing = 1 - Math.pow(1 - 0.18, dt / 16.6667);
        let step = distance * smoothing;

        // speed limit: never travel more than this many px per frame,
        // but scale it with the distance so long flicks still catch up.
        const maxStep = Math.max(40, absDistance * 0.5) * (dt / 16.6667);
        if (Math.abs(step) > maxStep) step = Math.sign(step) * maxStep;

        current += step;
      }

      smoothedScrollRef.current = current;
      updateCardTransforms(current);

      if (current !== target) {
        animationFrameRef.current = window.requestAnimationFrame(tick);
      }
    },
    [getScrollData, updateCardTransforms],
  );

  const handleScroll = useCallback(() => {
    // Reduced motion: skip the easing loop entirely and snap to the real
    // scroll position so cards move 1:1 with the page (no animated motion).
    if (reducedMotionRef.current) {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      smoothedScrollRef.current = null;
      updateCardTransforms();
      return;
    }
    if (animationFrameRef.current !== null) return;
    lastFrameTimeRef.current = performance.now();
    animationFrameRef.current = window.requestAnimationFrame(tick);
  }, [tick, updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>(".scroll-stack-card"),
    );
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    const measureLayout = () => {
      const scrollerTop = useWindowScroll
        ? scroller.getBoundingClientRect().top + window.scrollY
        : 0;
      cardTopsRef.current = cards.map((card) => scrollerTop + card.offsetTop);
      const endElement = scroller.querySelector<HTMLElement>(".scroll-stack-end");
      endTopRef.current = endElement
        ? scrollerTop + endElement.offsetTop
        : scrollerTop;
      transformsCache.clear();
      smoothedScrollRef.current = null;
      updateCardTransforms();
    };

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      scroller.addEventListener("scroll", handleScroll, { passive: true });
    }

    window.addEventListener("resize", measureLayout);

    // Track the user's reduced-motion preference, reacting to live changes.
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = () => {
      reducedMotionRef.current = motionQuery.matches;
      if (motionQuery.matches && animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
        smoothedScrollRef.current = null;
      }
    };
    applyMotionPreference();
    motionQuery.addEventListener("change", applyMotionPreference);

    measureLayout();

    return () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
      if (useWindowScroll) window.removeEventListener("scroll", handleScroll);
      else scroller.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureLayout);
      motionQuery.removeEventListener("change", applyMotionPreference);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardTopsRef.current = [];
      transformsCache.clear();
    };
  }, [itemDistance, useWindowScroll, handleScroll, updateCardTransforms]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
      style={style}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;

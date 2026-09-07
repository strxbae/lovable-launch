import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "/#work" },
  { label: "About", href: "/about" },
] as const;

export function SiteNav({ activeIndex = 0 }: { activeIndex?: number }) {
  const [active, setActive] = useState(activeIndex);
  const [hovered, setHovered] = useState<number | null>(null);
  const [lampX, setLampX] = useState(0);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const litIndex = hovered ?? active;

  useEffect(() => {
    const el = linkRefs.current[litIndex];
    if (el) setLampX(el.offsetLeft + el.offsetWidth / 2);
  }, [litIndex]);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border/40 bg-background/60 px-6 py-4 backdrop-blur-xl md:px-10"
    >
      <a href="/" className="group flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-md bg-foreground transition-transform duration-300 group-hover:scale-105">
          <span className="text-[11px] font-bold tracking-tight text-background">FR</span>
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold">Fadli ramadhan</span>
          <span className="text-[11px] text-muted-foreground">UI/UX Designer</span>
        </span>
      </a>

      <div className="absolute left-1/2 -translate-x-1/2">
        <div
          onMouseLeave={() => setHovered(null)}
          className="relative flex rounded-full border border-border/50 bg-card/50 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -top-4 h-1.5 w-10 -translate-x-1/2 rounded-full bg-foreground/80 blur-[1px]"
            animate={{ x: lampX }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -top-3 h-24 w-56 -translate-x-1/2"
            style={{
              background:
                "radial-gradient(50% 90% at 50% 0%, color-mix(in oklch, var(--foreground) 28%, transparent), transparent 75%)",
            }}
            animate={{ x: lampX }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          />
          {NAV_LINKS.map((link, i) => {
            const lit = i === litIndex;
            return (
              <a
                key={link.label}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                href={link.href}
                onClick={() => setActive(i)}
                onMouseEnter={() => setHovered(i)}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                  lit ? "text-foreground" : "text-muted-foreground"
                } hover:bg-foreground/10 hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.08)]`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-5 sm:flex">
          {[
            {
              label: "Linked In",
              href: "https://www.linkedin.com/in/fadli-ramadhan11/",
              external: true,
            },
            { label: "Resume", href: "/resume", external: false },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group/link flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover/link:w-full" />
              </span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Buka menu"
          className="grid size-9 place-items-center rounded-full border border-border/50 bg-card/50 text-foreground transition-colors hover:bg-foreground/10"
        >
          <Menu size={16} />
        </button>
      </div>
    </motion.nav>
  );
}

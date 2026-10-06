import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack";

import workCheckout from "@/assets/work-checkout.jpg";
import workBills from "@/assets/work-bills.jpg";
import workQuickpass from "@/assets/work-quickpass.jpg";
import workWallet from "@/assets/work-wallet.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import heroSky from "@/assets/hero-sky.jpg";
import cloud1 from "@/assets/cloud-1.png";
import cloud2 from "@/assets/cloud-2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjay Menon — Product Designer" },
      {
        name: "description",
        content:
          "Product designer building consumer & enterprise products at Mygate. Selected work in payments, access control and design systems.",
      },
      { property: "og:title", content: "Sanjay Menon — Product Designer" },
      {
        property: "og:description",
        content:
          "Product designer building consumer & enterprise products at Mygate. Selected work in payments, access control and design systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------- data --------------------------------- */

const projects = [
  {
    no: "01",
    year: "2025",
    title: "The checkout, rebuilt for 5M+ homes",
    tags: ["Payments", "iOS & Android"],
    body: "A checkout redesign focused on reducing friction, improving payment adoption, and supporting over 1M+ monthly transactions.",
    image: workCheckout,
    actions: [{ label: "View Case Study", kind: "primary" as const }],
  },
  {
    no: "02",
    year: "2026",
    title: "Bills for the whole household, not just you.",
    tags: ["Payments", "Bills & Recharges", "iOS & Android"],
    body: "Most apps let you pay bills. We designed one that knows who you live with. Households can now share, track, and pay bills together on Mygate.",
    image: workBills,
    actions: [{ label: "Coming Soon", kind: "locked" as const }],
  },
  {
    no: "03",
    year: "2024",
    title: "Quickpass: Enabling faster entries for faster deliveries",
    tags: ["Consumer App", "Zero to One", "iOS & Android"],
    body: "Delivery and service personnel entered details manually at every gate, every visit. Quickpass changed that. Now handling 20,000+ entries daily.",
    image: workQuickpass,
    actions: [
      { label: "Coming Soon", kind: "locked" as const },
      { label: "View in Playstore", kind: "primary" as const },
    ],
  },
  {
    no: "04",
    year: "2023",
    title: "A wallet that feels calm, not cluttered",
    tags: ["Fintech", "Design System", "iOS & Android"],
    body: "Rebuilt the wallet experience around clarity: fewer taps to pay, clearer balances, and a token based design system used across teams.",
    image: workWallet,
    actions: [{ label: "View Case Study", kind: "primary" as const }],
  },
  {
    no: "05",
    year: "2023",
    title: "Analytics dashboard for ops teams",
    tags: ["B2B SaaS", "Data Viz", "Web"],
    body: "Turned dense operational data into a dashboard teams actually read daily, cutting time to insight from minutes to seconds.",
    image: workDashboard,
    actions: [{ label: "View Case Study", kind: "primary" as const }],
  },
];

const experience = [
  {
    period: "Aug '24 - Present",
    role: "Product Designer",
    company: "Mygate",
    location: "Bengaluru, KA",
    points: [
      "Own end to end product design across Resident App, ERP, Payments, Helpdesk, and Smart Devices.",
      "Led the design and launch of QuickPass, now used across 500+ societies with 28,000+ downloads.",
      "Redesigned the Helpdesk ecosystem and contributed to large scale payments and access control experiences.",
    ],
  },
  {
    period: "Jun '24 - Aug '24",
    role: "Product Design Intern",
    company: "Mygate",
    location: "Bengaluru, KA",
    points: [
      "Designed features and improvements for smart locks and connected device experiences.",
      "Led design for the Smart Video Doorbell MVP, from early concepts to validation.",
      "Worked across mobile and hardware touchpoints to improve onboarding and daily usage flows.",
    ],
  },
  {
    period: "Dec '23 - Apr '24",
    role: "UI / UX Design Intern",
    company: "Gida Technologies",
    location: "Bengaluru, KA",
    points: [
      "Designed key experiences for the HDFC Ergo Here App, simplifying insurance purchase journeys.",
      "Led end to end design for Here Pets, supporting the launch of pet insurance services.",
    ],
  },
  {
    period: "May '23 - Jul '23",
    role: "UI / UX Design Intern",
    company: "Aurochs Solutions",
    location: "Pune, MH",
    points: [
      "Designed enterprise workflows for pharmaceutical and medical device incentive management products.",
      "Created user flows, wireframes, and interfaces for complex B2B platforms.",
      "Collaborated with product and engineering teams to improve usability across core workflows.",
    ],
  },
];

const recommendations = [
  {
    name: "Ritik Raj",
    title: "Senior Product Designer @ Slice",
    quote:
      "Sanjay, during his design internship at Gida Technologies, proved himself to be a talented and reliable designer. His strong grasp of user-centric design, attention to detail, and ability to take feedback and improve rapidly made him a key contributor to our projects. Beyond his skills, he was proactive, collaborative, and a joy to work with.",
  },
  {
    name: "Stian Michael Årsnes",
    title: "Founder, Naitsmania AS",
    quote:
      "I highly recommend Sanjay, he has an excellent eye for design (both visually and UI/UX) and quality. He is able to adapt his design to different cultures and patterns and always makes sure to really understand the customer needs.",
  },
  {
    name: "Sujeet Pillai",
    title: "Founder & CTO, Aurochs Solutions",
    quote:
      "Sanjay was outstanding at Aurochs. His short stint of just 6 weeks left a great impact. He's patient and listens to your point of view but has his own opinions and viewpoints as well. His formal training is solid and it's evident from his structured UI/UX process.",
  },
];

/* -------------------------------- helpers -------------------------------- */

function Eyebrow({ children, center }: { children: string; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 ${center ? "justify-center" : ""} eyebrow text-foreground/70`}
    >
      <span className="text-primary">✦</span>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="relative mx-auto max-w-[1140px] px-6 my-16 sm:my-24">
      <div className="h-px w-full bg-foreground/10" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-foreground/30">
        +
      </span>
    </div>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1200, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="text-primary text-5xl sm:text-6xl font-extrabold tracking-tight">
      {value}
      {suffix}
    </span>
  );
}

function Typewriter({
  words,
  className = "",
  typeSpeed = 95,
  deleteSpeed = 45,
  holdTime = 1600,
}: {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[index] ?? "";

  useEffect(() => {
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && count === word.length) delay = holdTime;
    if (deleting && count === 0) delay = 320;

    const id = window.setTimeout(() => {
      if (!deleting) {
        if (count < word.length) setCount(count + 1);
        else setDeleting(true);
      } else {
        if (count > 0) setCount(count - 1);
        else {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [count, deleting, word, words.length, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      <span aria-hidden>{word.slice(0, count)}</span>
      <span className="sr-only">{words.join(", ")}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.8em] w-[0.06em] translate-y-[0.05em] animate-[caret-blink_1s_step-end_infinite] bg-primary align-middle"
      />
    </span>
  );
}

/* --------------------------------- page ---------------------------------- */

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <SiteNav />

      {/* hero */}
      <header className="relative isolate overflow-hidden px-6 pb-24 pt-24 text-center sm:pt-32">
        {/* sky background */}
        <img
          src={heroSky}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-40 bg-gradient-to-b from-transparent to-background"
        />

        {/* animated clouds */}
        <img
          src={cloud1}
          alt=""
          aria-hidden
          className="cloud-in pointer-events-none absolute -left-16 top-10 -z-10 w-[38rem] max-w-[70vw] [--cloud-o:0.85] [--cloud-x:-6rem] [animation-delay:0.1s,1.9s]"
        />
        <img
          src={cloud2}
          alt=""
          aria-hidden
          className="cloud-in pointer-events-none absolute -right-24 top-32 -z-10 w-[42rem] max-w-[80vw] [--cloud-o:0.8] [--cloud-x:7rem] [animation-delay:0.45s,2.25s]"
        />
        <img
          src={cloud1}
          alt=""
          aria-hidden
          className="cloud-in pointer-events-none absolute -bottom-16 left-1/4 -z-10 w-[34rem] max-w-[70vw] [--cloud-o:0.7] [--cloud-x:0rem] [animation-delay:0.8s,2.6s]"
        />

        <div className="mx-auto flex max-w-[1140px] flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-foreground/70 ring-1 ring-black/5 backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Halo, I&apos;m Fadli 👋
          </span>

          <h1 className="display-xl mt-8 text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-tight">
            I craft products,
            <br />
            interactions &amp;{" "}
            <Typewriter
              words={["Interfaces", "Magic", "Stories"]}
              className="font-script text-primary"
            />
            <span aria-hidden>.</span>
          </h1>

          <p className="mt-8 text-base font-semibold text-foreground/90 sm:text-lg max-w-lg">
            Enthusiast UI/UX Designer
          </p>
          <p className="mt-2 text-sm text-foreground/60 sm:text-base">Based in Jakarta, ID</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              Explore Works
            </a>
            <a
              href="/resume"
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-background/80 px-7 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-foreground/5"
            >
              View Resume
            </a>
          </div>
        </div>
      </header>

      {/* stats section */}
      <section className="mx-auto max-w-[1140px] px-6 py-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 rounded-3xl border border-foreground/10 bg-card/40 p-8 backdrop-blur text-center">
          <div>
            <Counter to={5} suffix="M+" />
            <p className="mt-2 text-xs uppercase tracking-wider text-foreground/60">Homes Impacted</p>
          </div>
          <div>
            <Counter to={28} suffix="k+" />
            <p className="mt-2 text-xs uppercase tracking-wider text-foreground/60">App Downloads</p>
          </div>
          <div>
            <Counter to={4} suffix="+" />
            <p className="mt-2 text-xs uppercase tracking-wider text-foreground/60">Years Experience</p>
          </div>
          <div>
            <Counter to={100} suffix="%" />
            <p className="mt-2 text-xs uppercase tracking-wider text-foreground/60">User Focused</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* selected work */}
      <section id="work" className="mx-auto max-w-[1140px] px-6 py-8">
        <div className="mb-12">
          <Eyebrow>PORTFOLIO</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Selected Work
          </h2>
          <p className="mt-2 text-base text-foreground/60">
            High-impact product design solving tangible everyday problems.
          </p>
        </div>

        <ScrollStack itemDistance={36} itemScale={0.02} baseScale={0.92}>
          {projects.map((proj) => (
            <ScrollStackItem key={proj.no}>
              <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-6 sm:p-10 shadow-lg transition-all hover:border-foreground/20">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-foreground/50">
                      <span>{proj.no}</span>
                      <span>/</span>
                      <span>{proj.year}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-foreground/70">
                      {proj.body}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-4">
                      {proj.actions.map((action) => (
                        <button
                          key={action.label}
                          disabled={action.kind === "locked"}
                          className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition ${
                            action.kind === "primary"
                              ? "bg-primary text-primary-foreground hover:opacity-90"
                              : "border border-foreground/20 bg-muted/30 text-foreground/50 cursor-not-allowed"
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-foreground/10 bg-muted/20 aspect-[16/10]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      <Divider />

      {/* experience */}
      <section id="experience" className="mx-auto max-w-[1140px] px-6 py-8">
        <div className="mb-12">
          <Eyebrow>TIMELINE</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-foreground/10 bg-card/60 p-6 sm:p-8 backdrop-blur transition hover:border-foreground/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-primary font-normal">@ {exp.company}</span>
                </h3>
                <span className="text-xs font-mono text-foreground/50">{exp.period} · {exp.location}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70 list-disc list-inside">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* recommendations / testimonials */}
      <section id="recommendations" className="mx-auto max-w-[1140px] px-6 py-8">
        <div className="mb-12 text-center">
          <Eyebrow center>TESTIMONIALS</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Kind Words from Teammates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-foreground/10 bg-card p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-foreground/80 italic">
                &ldquo;{rec.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-foreground/10 pt-4">
                <h4 className="font-bold text-sm text-foreground">{rec.name}</h4>
                <p className="text-xs text-foreground/60 mt-0.5">{rec.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="mt-20 border-t border-foreground/10 bg-card/30 py-12 px-6 backdrop-blur text-center">
        <div className="mx-auto max-w-[1140px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Fadli. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-foreground transition">Back to top ↑</a>
            <a href="/resume" className="hover:text-foreground transition">Resume</a>
            <a href="/about" className="hover:text-foreground transition">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

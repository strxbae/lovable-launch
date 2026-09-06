import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import avatar from "@/assets/avatar.jpg";
import workCheckout from "@/assets/work-checkout.jpg";
import workBills from "@/assets/work-bills.jpg";
import workQuickpass from "@/assets/work-quickpass.jpg";
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
    <div className="relative mx-auto max-w-[1140px] px-6">
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
    <span ref={ref} className="text-primary text-6xl font-extrabold tracking-tight">
      {value}
      {suffix}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.12)] ring-1 ring-black/5">
        <a href="#top" className="flex items-center gap-2 pl-1">
          <img
            src={avatar}
            alt="Sanjay Menon"
            width={64}
            height={64}
            className="size-7 rounded-full object-cover"
          />
          <span className="text-sm font-extrabold tracking-tight">SANJAY</span>
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid size-7 place-items-center rounded-full transition hover:bg-black/5"
        >
          <span className="text-lg leading-none tracking-[0.1em]">•••</span>
        </button>
      </div>
      {open && (
        <div className="mt-2 flex flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,0.12)] ring-1 ring-black/5">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Experience", "#experience"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2 text-sm font-semibold transition hover:bg-black/5"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Typewriter({ text, className = "" }: { text: string; className?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, 160);
    return () => window.clearInterval(id);
  }, [text]);

  return (
    <span className={className}>
      <span aria-hidden>{text.slice(0, count)}</span>
      <span className="sr-only">{text}</span>
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
    <div className="min-h-screen bg-secondary p-0 sm:p-6">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-background text-foreground sm:rounded-xl sm:ring-1 sm:ring-window-border sm:shadow-2xl">
        <div
          className="relative hidden h-11 items-center border-b border-window-border bg-window-chrome px-4 sm:flex"
          aria-label="macOS window frame"
        >
          <div className="flex items-center gap-2" aria-hidden>
            <span className="size-3 rounded-full bg-traffic-close ring-1 ring-foreground/10" />
            <span className="size-3 rounded-full bg-traffic-minimize ring-1 ring-foreground/10" />
            <span className="size-3 rounded-full bg-traffic-expand ring-1 ring-foreground/10" />
          </div>
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-foreground/55">
            sanjaymenon.design
          </span>
        </div>

        <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* top meta bar */}
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 pt-6 eyebrow text-foreground/60">
        <span className="flex items-center gap-1.5">
          BASED IN
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden>
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
          BENGALURU, KA
        </span>
        <span>CREATE &gt; CONSUME</span>
      </div>

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

        <div className="mx-auto max-w-[1140px]">
          <p className="text-lg font-medium text-foreground/70">👋 Hey, I&apos;m Sanjay</p>
          <h1 className="display-xl mt-6 text-[clamp(2.5rem,9vw,7.5rem)]">
            crafting digital
            <br />
            <Typewriter text="magic" className="font-script text-primary" />
          </h1>
          <p className="mt-8 text-base text-foreground/60 sm:text-lg">
            Building consumer &amp; enterprise products @{" "}
            <span className="font-semibold text-primary">mygate</span>
          </p>
        </div>

      </header>


      <Divider />

      {/* what I do */}
      <section className="mx-auto max-w-[1140px] px-6 py-24">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
          <Eyebrow>WHAT I DO</Eyebrow>
          <div>
            <h2 className="text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold leading-[1.12] tracking-tight">
              I turn messy, real-world problems into products people actually{" "}
              <em className="font-script not-italic text-primary text-[1.25em] font-semibold">
                understand
              </em>{" "}
              — interfaces that feel obvious, systems that scale, and details that quietly do the
              work.
            </h2>

            <div className="mt-16 grid gap-10 sm:grid-cols-2">
              <div>
                <Counter to={2} suffix="+" />
                <div className="mt-3 border-t border-foreground/10 pt-3">
                  <p className="text-lg font-bold">Years designing</p>
                  <p className="mt-1 text-foreground/60">
                    consumer products, enterprise software &amp; design systems
                  </p>
                </div>
              </div>
              <div>
                <Counter to={5} suffix="M+" />
                <div className="mt-3 border-t border-foreground/10 pt-3">
                  <p className="text-lg font-bold">Users</p>
                  <p className="mt-1 text-foreground/60">
                    reached by the products I&apos;ve helped ship at Mygate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* selected work */}
      <section id="work" className="py-24">
        <div className="mx-auto max-w-[1140px] px-6 text-center">
          <Eyebrow center>SELECTED WORK</Eyebrow>
          <h2 className="display-xl mt-6 text-[clamp(2.25rem,6vw,4.5rem)]">
            check out some of my work
          </h2>
          <p className="mx-auto mt-5 max-w-md text-foreground/60">
            A few products I&apos;ve helped shape, and the thinking behind them.
          </p>
        </div>

        <div className="mt-14 space-y-6 px-3 sm:px-6">
          {projects.map((p) => (
            <article
              key={p.no}
              className="relative isolate overflow-hidden rounded-[2rem] bg-black/5"
            >
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={1440}
                loading="lazy"
                className="h-[70vh] min-h-[520px] w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 max-w-xl rounded-[1.5rem] border border-white/25 bg-white/15 p-6 backdrop-blur-md sm:inset-x-10 sm:bottom-10 sm:p-8">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span className="grid size-8 place-items-center rounded-full bg-white/20">
                    {p.no}
                  </span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  {p.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/25 pt-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/20 px-3 py-1 text-sm text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-white/85">{p.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.actions.map((a) =>
                    a.kind === "locked" ? (
                      <span
                        key={a.label}
                        className="inline-flex items-center gap-2 rounded-full bg-white/20 py-2 pl-2 pr-5 font-semibold text-white/80"
                      >
                        <span className="grid size-8 place-items-center rounded-full bg-white/25">
                          🔒
                        </span>
                        {a.label}
                      </span>
                    ) : (
                      <a
                        key={a.label}
                        href="#work"
                        className="inline-flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-5 font-semibold text-black transition hover:bg-white/90"
                      >
                        <span className="grid size-8 place-items-center rounded-full bg-black text-white">
                          →
                        </span>
                        {a.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* about */}
      <section id="about" className="mx-auto max-w-[1140px] px-6 py-24">
        <Eyebrow center>ABOUT ME</Eyebrow>
        <h2 className="display-xl mt-6 text-center text-[clamp(2.25rem,6vw,4.5rem)]">
          a little about myself
        </h2>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/70">
          <p>
            My journey into design started long before product design. I began with graphic design
            at a young age, spending years experimenting with Photoshop, branding projects, and
            freelance work. During college, I worked part-time designing websites, emails, and
            social media campaigns, which helped me build a strong foundation across different
            areas of design.
          </p>
          <p>
            Today, I work on consumer and enterprise products, where I enjoy turning complex
            workflows into experiences that feel simple and intuitive. I&apos;m particularly drawn
            to problems that sit at the intersection of user needs, business goals, and technical
            constraints.
          </p>
          <p className="font-script text-4xl text-foreground">Sanjay.</p>
        </div>
      </section>

      <Divider />

      {/* experience */}
      <section id="experience" className="py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <Eyebrow center>EXPERIENCE</Eyebrow>
          <h2 className="display-xl mt-6 text-center text-[clamp(2.25rem,6vw,4.5rem)]">
            the journey so far
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-foreground/60">
            From healthcare SaaS to insurance to community tech — four roles across two years, and
            counting.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="flex snap-x snap-mandatory items-stretch gap-0 overflow-x-auto scroll-smooth px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-[max(1.5rem,calc((100vw-1140px)/2))]"
            role="list"
            aria-label="Work experience"
          >
            {experience.map((job, i) => (
              <div key={job.period + job.role} className="flex shrink-0 items-stretch">
                {i > 0 && (
                  <div
                    aria-hidden
                    className="relative flex w-16 shrink-0 items-center justify-center sm:w-24"
                  >
                    <span className="h-px w-full bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
                    <span className="absolute size-2 rounded-full bg-primary/60 ring-4 ring-background" />
                  </div>
                )}
                <article
                  role="listitem"
                  className="group flex w-[85vw] shrink-0 snap-start flex-col justify-between rounded-[2rem] bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur transition-colors hover:ring-primary/30 sm:w-[24rem]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-foreground/80 shadow-sm ring-1 ring-black/5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-3.5 text-primary"
                          aria-hidden
                        >
                          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                        </svg>
                        {job.period}
                      </span>
                      <span className="eyebrow pt-1 text-foreground/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-extrabold tracking-tight">{job.role}</h3>
                    <p className="mt-1 text-foreground/60">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <ul className="mt-7 space-y-3 border-t border-foreground/10 pt-6 text-sm text-foreground/70">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>

          <p className="mt-2 text-center eyebrow text-foreground/40">scroll →</p>
        </div>
      </section>


      <Divider />

      {/* recommendations */}
      <section className="mx-auto max-w-[1140px] px-6 py-24">
        <Eyebrow center>RECOMMENDATIONS</Eyebrow>
        <h2 className="display-xl mt-6 text-center text-[clamp(2.25rem,6vw,4.5rem)]">
          what people say about me
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-foreground/60">
          A few words from people I&apos;ve designed with, shipped alongside, and problem-solved
          next to.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {recommendations.map((r) => (
            <figure key={r.name} className="rounded-3xl bg-white/70 p-7 ring-1 ring-black/5">
              <blockquote className="text-foreground/70">“{r.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-foreground/10 pt-4">
                <p className="font-bold">{r.name}</p>
                <p className="text-sm text-foreground/55">{r.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* footer CTA */}
      <footer className="mx-auto max-w-[1140px] px-6 pb-16 pt-24">
        <h2 className="display-xl text-[clamp(2.5rem,8vw,6.5rem)]">
          lets{" "}
          <em className="font-script not-italic text-primary text-[1.1em] font-semibold">
            design
          </em>{" "}
          incredible work together.
        </h2>

        <div className="mt-16 grid gap-8 border-t border-foreground/10 pt-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow text-foreground/50">Email</p>
            <a
              href="mailto:snj.menon05@gmail.com"
              className="text-xl font-semibold underline-offset-4 hover:underline"
            >
              snj.menon05@gmail.com
            </a>
          </div>
          <div className="sm:text-right">
            <p className="eyebrow text-foreground/50">Social</p>
            <div className="mt-1 flex gap-4 sm:justify-end">
              {["LinkedIn", "Dribbble", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="font-semibold text-foreground/70 transition hover:text-primary"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-foreground/45">© 2026 Sanjay Menon</p>
      </footer>
        </div>
      </div>
    </div>
  );
}

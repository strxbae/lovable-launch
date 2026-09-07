import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";


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

const NAV_LINKS = [
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
] as const;

function Nav() {
  const [active, setActive] = useState(0);
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
      {/* Kiri: brand */}
      <a href="#top" className="group flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-md bg-foreground transition-transform duration-300 group-hover:scale-105">
          <span className="text-[11px] font-bold tracking-tight text-background">FR</span>
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold">Fadli ramadhan</span>
          <span className="text-[11px] text-muted-foreground">UI/UX Designer</span>
        </span>
      </a>

      {/* Tengah: menu pill dengan spotlight */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div
          onMouseLeave={() => setHovered(null)}
          className="relative flex rounded-full border border-border/50 bg-card/50 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
        >
          {/* Spotlight beam */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -top-4 h-1.5 w-10 -translate-x-1/2 rounded-full bg-foreground/80 blur-[1px]"
            animate={{ x: lampX }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          />
          {/* Spotlight cone */}
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
                } hover:bg-foreground/10 hover:shadow-[inset_0_1px_0_theme(colors.foreground/0.2)]`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Kanan: link eksternal + tombol ikon */}
      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-5 sm:flex">
          {[
            { label: "Linked In", href: "https://www.linkedin.com/in/fadli-ramadhan11/", external: true },
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
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />


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
            <span className="size-1.5 rounded-full bg-primary" />
            Halo, I&apos;m Fadli 👋
          </span>

          <h1 className="display-xl mt-8 text-[clamp(2.5rem,8vw,6.5rem)]">
            I craft products,
            <br />
            interactions &amp;{" "}
            <Typewriter
              words={["Interfaces", "Magic", "Stories"]}
              className="font-script text-primary"
            />

            <span aria-hidden>.</span>
          </h1>

          <p className="mt-10 text-base font-semibold text-foreground sm:text-lg">
            Enthusiast UI/UX Designer
          </p>
          <p className="mt-2 text-sm text-foreground/50 sm:text-base">Based in Jakarta, ID</p>

          <div className="mt-16 flex flex-col items-center gap-3 text-foreground/45">
            <span className="text-[10px] font-semibold tracking-[0.35em]">SCROLL</span>
            <span className="flex h-11 w-7 items-start justify-center rounded-full ring-1 ring-foreground/20">
              <span className="mt-2 size-1.5 animate-bounce rounded-full bg-foreground/40" />
            </span>
            <span className="text-sm">↓</span>
          </div>
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

        <div className="mx-auto mt-24 max-w-[1140px] px-3 pb-[30vh] sm:px-6">
          {projects.map((p, i) => (
            <div
              key={p.no}
              className="sticky"
              style={{ top: `calc(6rem + ${i * 1.5}rem)`, marginBottom: "8vh" }}
            >
              <article className="group relative overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_36px_110px_rgba(0,0,0,0.2)]">
                {/* macOS window title bar */}
                <div className="flex h-10 items-center gap-2 border-b border-black/5 bg-white px-4">
                  <span className="size-3 rounded-full bg-[#FF5F57] ring-1 ring-black/5" aria-hidden />
                  <span className="size-3 rounded-full bg-[#FFBD2E] ring-1 ring-black/5" aria-hidden />
                  <span className="size-3 rounded-full bg-[#28C840] ring-1 ring-black/5" aria-hidden />
                  <span className="ml-auto truncate pl-4 text-xs font-medium text-foreground/40">
                    {p.title}
                  </span>
                </div>

                <div className="relative isolate aspect-video w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-3 bottom-3 max-w-xl rounded-lg border border-white/25 bg-black/25 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6">
                    <div className="flex items-center justify-between text-xs text-white/80">
                      <span className="grid size-7 place-items-center rounded-full bg-white/20">
                        {p.no}
                      </span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 hidden text-sm text-white/85 sm:block">{p.body}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.actions.map((a) =>
                        a.kind === "locked" ? (
                          <span
                            key={a.label}
                            className="inline-flex items-center gap-2 rounded-full bg-white/20 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white/80"
                          >
                            <span className="grid size-6 place-items-center rounded-full bg-white/25 text-xs">
                              🔒
                            </span>
                            {a.label}
                          </span>
                        ) : (
                          <a
                            key={a.label}
                            href="#work"
                            className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-black transition hover:bg-white/90"
                          >
                            <span className="grid size-6 place-items-center rounded-full bg-black text-xs text-white transition-transform duration-300 group-hover:translate-x-0.5">
                              →
                            </span>
                            {a.label}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </div>
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
  );
}

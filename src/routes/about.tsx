import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { SiteNav } from "@/components/site-nav";
import cloud1 from "@/assets/cloud-1.png";
import cloud2 from "@/assets/cloud-2.png";
import aboutPortrait from "@/assets/about-portrait.jpg";
import aboutCampus from "@/assets/about-campus.jpg";
import aboutTrain from "@/assets/about-train.jpg";
import aboutSunset from "@/assets/about-sunset.jpg";
import aboutRoad from "@/assets/about-road.jpg";
import aboutSignature from "@/assets/about-signature.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fadli Ramadhan, UI/UX Designer" },
      {
        name: "description",
        content:
          "The story behind Fadli Ramadhan: from Informatics at Gunadarma University to designing aesthetic, inclusive products that empower users.",
      },
      { property: "og:title", content: "About — Fadli Ramadhan, UI/UX Designer" },
      {
        property: "og:description",
        content:
          "My story, experience, certifications and skills as a UI/UX designer based in Indonesia.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const experience = [
  {
    company: "FundEx",
    role: "UI Designer — Virtual Intern",
    period: "Feb — Mar '24",
    description:
      "Redesigned the landing page of fundex.id and adapted the whole layout for the Android breakpoint.",
  },
  {
    company: "Niagahoster",
    role: "UI/UX Designer — Virtual Intern",
    period: "Jan — Feb '24",
    description:
      "Identified the triggers behind a high exit rate and redesigned the Checkout page to reduce friction.",
  },
  {
    company: "Alterra Academy",
    role: "UI/UX Designer — Studi Independent",
    period: "Agu — Dec '22",
    description:
      "Kampus Merdeka program. Led the UI/UX team on a capstone project: a coworking space booking app.",
  },
];

const certifications = [
  {
    issuer: "IPB University",
    items: [{ name: "UI/UX Design App in Figma for UI/UX Designer", date: "Mar '24", id: "9462025" }],
  },
  {
    issuer: "BNSP",
    items: [
      {
        name: "Occupation of Junior Graphic Designer",
        date: "Sep '23",
        id: "5819 2166 5 0012100 2023",
      },
    ],
  },
  {
    issuer: "Coursera",
    items: [
      {
        name: "Conduct UX Research and Initial Concept Testing",
        date: "Agu '23",
        id: "W84ZU8KPWH4J",
      },
      {
        name: "Create Low-Fidelity Wireframes and Prototypes",
        date: "Jul '23",
        id: "UE89MAUX4QEU",
      },
      {
        name: "Begin the UX Design Process: Empathize, Define, and Ideate",
        date: "Jul '23",
        id: "XBGD72WUE5WM",
      },
      { name: "Basics of User Experience Design", date: "Jun '23", id: "HX9GWB32ZFRU" },
    ],
  },
];

const skills = [
  ["Interactive Prototyping", "Wireframing", "Usability Testing"],
  ["Usability Heuristic", "Interaction Design", "Law Of UX"],
  ["User Centered Design", "Design Thinking", "Design Sprint"],
  ["User Interviews", "Empathize", "User Journey"],
  ["Teamwork", "Good Communication", "Leadership"],
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="size-3 rounded-full bg-primary" />
      <span className="eyebrow text-muted-foreground">{children}</span>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal>
      <figure className="group rounded-[20px] border border-border/70 bg-card/70 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_28px_90px_rgba(0,0,0,0.14)]">
        <span aria-hidden className="mb-3 block h-px w-full bg-border/70" />
        <div className="aspect-[3/4] overflow-hidden rounded-[20px]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <span aria-hidden className="mt-3 block h-px w-full bg-border/70" />
      </figure>
    </Reveal>
  );
}

function Para({ title, body }: { title: string; body: string }) {
  return (
    <Reveal delay={0.1}>
      <div className="max-w-[538px]">
        <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight tracking-tight">
          {title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">{body}</p>
      </div>
    </Reveal>
  );
}

const STORY: { src: string; alt: string; title: string; body: string }[] = [
  {
    src: aboutPortrait,
    alt: "Portrait of Fadli Ramadhan",
    title: "My background in Informatics",
    body: "I graduated in Informatics from Gunadarma University. Somewhere between writing code and shipping campus projects, I fell for Human-Computer Interaction — the part where technology finally meets the person using it.",
  },
  {
    src: aboutCampus,
    alt: "Campus courtyard at Gunadarma University",
    title: "But, I wanted more",
    body: "The curriculum only took me so far. I wanted to grow faster, so I chased mentors, communities and real briefs outside the classroom until design became a daily habit.",
  },
  {
    src: aboutTrain,
    alt: "Commuter train ride",
    title: "This thing called UX?",
    body: "The pandemic slowed everything down, so I joined the Kampus Merdeka UI/UX program. That was the first time I saw research, wireframes and testing come together as one craft — and I never really left.",
  },
  {
    src: aboutSunset,
    alt: "Sunset over the rooftops",
    title: "Making it all happen",
    body: "My developer background turned into an advantage: I can talk components, constraints and feasibility with engineers, then bring it back into a design that still feels human.",
  },
  {
    src: aboutRoad,
    alt: "Open road through green hills",
    title: "In my spare time,",
    body: "I keep tweaking this portfolio, take online courses, play badminton, game a little too long, and travel whenever the schedule allows.",
  },
];


function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav activeIndex={1} />

      {/* HERO with sky + clouds */}
      <header className="relative isolate overflow-hidden pb-24 pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(180deg, #F9FDFF 0%, #F9FDFF 19%, #74BAF8 74%, #1B8AE5 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
        />
        <img
          src={cloud1}
          alt=""
          aria-hidden
          className="cloud-in pointer-events-none absolute -left-24 top-40 -z-10 w-[34rem] max-w-[70vw] [--cloud-o:0.85] [--cloud-x:-6rem] [animation-delay:0.2s,2s]"
        />
        <img
          src={cloud2}
          alt=""
          aria-hidden
          className="cloud-in pointer-events-none absolute -right-28 top-24 -z-10 w-[38rem] max-w-[80vw] [--cloud-o:0.8] [--cloud-x:7rem] [animation-delay:0.5s,2.3s]"
        />
        <img
          src={cloud2}
          alt=""
          aria-hidden
          className="cloud-in pointer-events-none absolute -bottom-10 left-1/4 -z-10 w-[30rem] max-w-[65vw] [--cloud-o:0.7] [--cloud-x:-4rem] [animation-delay:0.8s,2.6s]"
        />

        <div className="mx-auto max-w-[1472px] px-6 md:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <SectionLabel>ABOUT ME</SectionLabel>
            <h1 className="display-xl mt-4 max-w-[22ch] text-[clamp(2rem,5.5vw,3.5rem)]">
              My dedication lies in creating aesthetic and inclusive products that{" "}
              <em className="font-script not-italic text-primary">empower users.</em>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* STORY GALLERY */}
      <section className="mx-auto max-w-[1140px] px-6 pb-24 md:px-10">
        <Reveal>
          <p className="max-w-[640px] text-xl font-semibold leading-relaxed sm:text-2xl">
            This is my story — alongside some flicks from my recent journey at Gunadarma
            University.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {STORY.map((item, i) => (
            <div
              key={item.title}
              className="grid items-center gap-10 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-16"
            >
              <div
                className={`w-full max-w-[260px] justify-self-center sm:max-w-[300px] md:justify-self-start ${i % 2 === 1 ? "md:order-2 md:justify-self-end" : ""}`}
              >

                <PhotoCard src={item.src} alt={item.alt} />
              </div>
              <div className={i % 2 === 1 ? "md:order-1 md:justify-self-end" : ""}>
                <Para title={item.title} body={item.body} />
              </div>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 max-w-[538px]">
            <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold tracking-tight">
              Thanks for stopping by!
            </h3>
            <img
              src={aboutSignature}
              alt="Fadli Ramadhan signature"
              loading="lazy"
              className="mt-4 w-40"
            />
          </div>
        </Reveal>
      </section>


      {/* EXPERIENCE */}
      <section className="mx-auto max-w-[1472px] px-6 pb-24 md:px-16 lg:px-32">
        <SectionLabel>EXPERIENCE</SectionLabel>
        <div className="mt-8 divide-y divide-border/70 border-y border-border/70">
          {experience.map((item) => (
            <Reveal key={item.company}>
              <div className="grid gap-4 py-8 md:grid-cols-[616px_1fr]">
                <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-tight [text-shadow:0_2px_0_color-mix(in_oklch,var(--foreground)_10%,transparent)]">
                  {item.company}
                </h3>
                <div>
                  <p className="text-2xl font-medium">{item.role}</p>
                  <p className="mt-1 text-base text-muted-foreground">{item.period}</p>
                  <p className="mt-3 text-base text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="mx-auto max-w-[1472px] px-6 pb-24 md:px-16 lg:px-32">
        <SectionLabel>CERTIFICATION</SectionLabel>
        <div className="mt-8 divide-y divide-border/70 border-y border-border/70">
          {certifications.map((group) => (
            <Reveal key={group.issuer}>
              <div className="grid gap-4 py-8 md:grid-cols-[616px_1fr]">
                <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-tight [text-shadow:0_2px_0_color-mix(in_oklch,var(--foreground)_10%,transparent)]">
                  {group.issuer}
                </h3>
                <div className="flex flex-col gap-6">
                  {group.items.map((cert) => (
                    <div key={cert.id}>
                      <p className="text-2xl font-medium">{cert.name}</p>
                      <p className="mt-1 text-base text-muted-foreground">
                        {cert.date} · ID {cert.id}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-[1472px] px-6 pb-24 md:px-16 lg:px-32">
        <SectionLabel>SKILLS</SectionLabel>
        <div className="mt-8 divide-y divide-border/70 border-y border-border/70">
          {skills.map((row) => (
            <div key={row.join()} className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-3">
              {row.map((skill) => (
                <span key={skill} className="text-base text-foreground/80">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-[1472px] px-6 py-16 md:px-16 lg:px-32">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="grid size-16 place-items-center rounded-[12px] bg-foreground">
              <span className="text-lg font-bold text-background">FR</span>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">MAIN</p>
              <ul className="mt-4 space-y-2">
                {[
                  { label: "Projects", href: "/#work" },
                  { label: "About", href: "/about" },
                  { label: "Experience", href: "/#experience" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-base transition-colors hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">CONTACT</p>
              <ul className="mt-4 space-y-2">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/fadli-ramadhan11/" },
                  { label: "Resume", href: "/resume" },
                  { label: "Gmail", href: "mailto:snj.menon05@gmail.com" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-base transition-colors hover:text-primary"
                    >
                      {l.label}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
            <p>© 2024 Fadli Ramadhan. All Rights Reserved.</p>
            <p>Made with love and Cafe Latte (less sugar, less ice).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

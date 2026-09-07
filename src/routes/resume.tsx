import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";

import cloud1 from "@/assets/cloud-1.png";
import cloud2 from "@/assets/cloud-2.png";
import resumeCv from "@/assets/resume-cv.jpg.asset.json";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Fadli Ramadhan, UI/UX Designer" },
      {
        name: "description",
        content:
          "The short, formal version: experience, education and contact details of Fadli Ramadhan, UI/UX Designer based in Indonesia.",
      },
      { property: "og:title", content: "Resume — Fadli Ramadhan, UI/UX Designer" },
      {
        property: "og:description",
        content:
          "For recruiters, hiring managers, and anyone who prefers the short version.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* sky gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, #F9FDFF 0%, #F9FDFF 19%, #74BAF8 54%, #1B8AE5 75%)",
        }}
      />

      {/* animated clouds */}
      <img
        src={cloud1}
        alt=""
        aria-hidden
        className="cloud-in pointer-events-none absolute -left-20 top-[26rem] -z-10 w-[36rem] max-w-[70vw] [--cloud-o:0.85] [--cloud-x:-6rem] [animation-delay:0.2s,2s]"
      />
      <img
        src={cloud2}
        alt=""
        aria-hidden
        className="cloud-in pointer-events-none absolute -right-24 top-[22rem] -z-10 w-[40rem] max-w-[80vw] [--cloud-o:0.8] [--cloud-x:7rem] [animation-delay:0.5s,2.3s]"
      />
      <img
        src={cloud1}
        alt=""
        aria-hidden
        className="cloud-in pointer-events-none absolute bottom-24 -left-10 -z-10 w-[30rem] max-w-[65vw] [--cloud-o:0.75] [--cloud-x:-5rem] [animation-delay:0.8s,2.6s]"
      />
      <img
        src={cloud2}
        alt=""
        aria-hidden
        className="cloud-in pointer-events-none absolute bottom-10 -right-16 -z-10 w-[32rem] max-w-[70vw] [--cloud-o:0.7] [--cloud-x:6rem] [animation-delay:1s,2.9s]"
      />

      {/* back */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="px-6 pt-8 md:px-16"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-card/80 px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back
        </Link>
      </motion.div>

      {/* heading */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="mx-auto max-w-[1140px] px-6 pt-14 text-center"
      >
        <p className="eyebrow text-foreground/50">RESUME</p>
        <h1 className="display-xl mt-4 text-[clamp(2.25rem,6vw,4.5rem)]">
          oh sure, let&apos;s keep it formal
        </h1>
        <p className="mx-auto mt-6 max-w-md text-foreground/60">
          For recruiters, hiring managers, and anyone who prefers the short version.
        </p>

        <a
          href={resumeCv.url}
          download="Fadli-Ramadhan-Resume.jpg"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-card py-2 pl-2 pr-6 font-semibold shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span className="grid size-9 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-y-0.5">
            <Download className="size-4" />
          </span>
          Download
        </a>
      </motion.header>

      {/* CV image */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="mx-auto mt-20 w-full max-w-[720px] px-6"
      >
        <img
          src={resumeCv.url}
          alt="Resume of Fadli Ramadhan, UI/UX Designer"
          width={1208}
          height={1708}
          className="w-full rounded-xl bg-card shadow-[0_40px_120px_rgba(0,0,0,0.22)] ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_50px_150px_rgba(0,0,0,0.28)]"
        />
      </motion.div>

      {/* footer CTA */}
      <footer className="mx-auto mt-32 max-w-[1140px] px-6 pb-16 text-primary-foreground">
        <h2 className="display-xl text-[clamp(2.25rem,7vw,5.5rem)]">
          lets{" "}
          <em className="font-script text-[1.1em] font-semibold not-italic">create</em>
          <br />
          incredible work together.
        </h2>

        <div className="mt-16 grid gap-8 border-t border-white/25 pt-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow opacity-70">Email</p>
            <a
              href="mailto:vadlyramadhan11@gmail.com"
              className="text-xl font-semibold underline-offset-4 hover:underline"
            >
              vadlyramadhan11@gmail.com
            </a>
          </div>
          <div className="sm:text-right">
            <p className="eyebrow opacity-70">Social</p>
            <div className="mt-2 flex gap-4 sm:justify-end">
              <a
                href="https://www.linkedin.com/in/fadli-ramadhan11/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline-offset-4 transition hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="mailto:vadlyramadhan11@gmail.com"
                className="font-semibold underline-offset-4 transition hover:underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm opacity-70">© 2026 Fadli Ramadhan</p>
      </footer>
    </div>
  );
}

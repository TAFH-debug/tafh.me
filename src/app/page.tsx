"use client";

import AnimatedBackground from "@/components/animated-background";
import Chip from "@/components/chip";
import EduCard from "@/components/edu-card";
import AchievementCard from "@/components/achievement-card";
import ProjectCard from "@/components/project-card";
import ThemeToggle from "@/components/theme-toggle";
import { data } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#socials" },
];

function SocialLink({
  href,
  children,
  index,
}: {
  href: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="glass-panel flex h-12 w-12 items-center justify-center rounded-xl text-foreground transition-colors hover:border-primary/50 hover:text-primary md:h-14 md:w-14"
        >
          {children}
        </motion.div>
      </Link>
    </motion.div>
  );
}

function Section({
  children,
  id,
  title,
  subtitle,
  index,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
  subtitle?: string;
  index: number;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="scroll-mt-24"
    >
      <div className="mb-6 flex items-end gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            0{index}
          </span>
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="section-divider mb-2 flex-1" />
      </div>
      {children}
    </motion.section>
  );
}

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <>
      <AnimatedBackground />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="glass-panel mx-auto flex max-w-3xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
          <motion.a
            href="#"
            className="font-display text-sm font-bold tracking-tight md:text-base"
            whileHover={{ color: "var(--primary)" }}
          >
            tafh<span className="text-primary">.</span>dev
          </motion.a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </header>

      <main className="relative mx-auto min-h-screen max-w-3xl px-4 pb-20 pt-28 md:px-8 md:pt-32">
        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12"
          >
            <motion.div
              className="relative shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="glow-ring rounded-full p-1">
                <Image
                  src="/ava.jpg"
                  alt="Talim Aushakhman"
                  width={140}
                  height={140}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-background bg-emerald-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <div className="text-center md:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-sm text-primary"
              >
                Full-stack Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-display mt-2 text-3xl font-bold leading-tight md:text-5xl"
              >
                Hello, I&apos;m{" "}
                <span className="gradient-text">Talim Aushakhman</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 max-w-lg text-muted-foreground md:text-lg"
              >
                Competing on kaggle, building desktop tauri apps & godot games.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"
              >
                <a
                  href="#projects"
                  className="rounded-full bg-primary px-6 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_oklch(0.72_0.17_22/40%)]"
                >
                  View Projects
                </a>
                <a
                  href="#socials"
                  className="glass-panel rounded-full px-6 py-2.5 font-mono text-sm transition-all hover:border-primary/40"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-14 md:gap-20">
          <Section id="about" index={1} title="About Me">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {data.about}
            </p>
          </Section>

          <Section
            id="experience"
            index={2}
            title="Work Experience"
            subtitle="Where I work"
          >
            {data.experience.map((val, idx) => (
              <EduCard {...val} key={idx} index={idx} />
            ))}
          </Section>

          <Section
            id="education"
            index={3}
            title="Education"
            subtitle="Where I learned and grew"
          >
            {data.education.map((val, idx) => (
              <EduCard {...val} key={idx} index={idx} />
            ))}
          </Section>

          <Section
            id="skills"
            index={4}
            title="Skills"
            subtitle="Technologies I work with"
          >
            <div className="flex flex-wrap">
              {data.skills.map((val, idx) => (
                <Chip content={val} key={idx} index={idx} />
              ))}
            </div>
          </Section>

          <Section
            id="projects"
            index={5}
            title="Projects"
            subtitle="Things I've built"
          >
            {data.projects.map((val, idx) => (
              <ProjectCard key={idx} {...val} index={idx} />
            ))}
          </Section>

          <Section
            id="achievements"
            index={6}
            title="Achievements"
            subtitle="Olympiads, hackathons, and competitions"
          >
            <div className="grid gap-3">
              {data.achievements.map((val, idx) => (
                <AchievementCard key={idx} {...val} index={idx} />
              ))}
            </div>
          </Section>

          <Section id="socials" index={7} title="Contact">
            <p className="mb-5 text-muted-foreground">
              Let&apos;s connect — always open to interesting projects and
              collaborations.
            </p>
            <div className="flex gap-4">
              {data.socials.map((val, idx) => (
                <SocialLink key={idx} href={val.href} index={idx}>
                  <val.icon className="h-5 w-5 md:h-6 md:w-6" />
                </SocialLink>
              ))}
            </div>
          </Section>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="section-divider mb-6" />
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Talim Aushakhman · Built with Next.js
          </p>
        </motion.footer>
      </main>
    </>
  );
}

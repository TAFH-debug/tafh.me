"use client";
import Chip from "@/components/chip";
import EduCard from "@/components/edu-card";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import Link from "next/link";
import {data} from "@/lib/config";

function Logo({ children, href, }: { children: React.ReactNode, href: string }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className="mx-3">
      <Link href={href}>
        {children}
      </Link>
    </motion.div>
  )
}

function Section({ children, id, index, title, className }: { children: React.ReactNode, id: string, duration: number, title: string, className?: string }) {
  return (
    <motion.div
        transition={{
            duration: 1,
            delay: 0.5 * index
        }}
        initial={{
            opacity: 0,
            translateX: -100
        }}
        animate={{
            opacity: 1,
            translateX: 0
        }} className="my-8">
    <section id={id} className={className}>
      <h2 className="text-xl md:text-2xl text-accent-foreground font-bold my-2">{title}</h2>
      {children}
    </section>
    </motion.div>
  )
}

export default function Page() {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen overflow-x-hidden max-w-screen bg-accent">
      <div className="flex flex-col items-center md:w-3/5 max-w-screen rounded-lg md:my-20 md:p-10 bg-accent">
      <div className="max-w-screen m-2 p-5">
      <motion.div
        animate={{
            scale: 1.2
        }}
        transition={{
            ease: ["easeOut"],
            repeat: 1,
            repeatType: "reverse"
        }}>
          <section id="title" className="flex items-center">
              <h1 className="text-2xl md:text-5xl font-bold md:mr-8">Hello, I&apos;m Talim Aushakhman👋</h1>
              <img className="rounded-full w-20 md:w-40" alt="alt" src="/ava.jpg" width={100} height={100} />
          </section>
      </motion.div>
      <Section id="about" index={1} title="About me ❓">
        <p className="text-muted-foreground md:text-lg">
          {data.about}
        </p>
      </Section>
      <Section id="education" index={2} title="Education 📖">
        {
          data.education.map((val, idx) =>
            <EduCard {...val} key={idx} /> 
          )
        }
      </Section>

      <Section id="skills" index={3} title="Skills ⚒️">
        <div className="flex flex-wrap">
          {
            data.skills.map((val, idx) => <Chip content={val} key={idx} /> )
          }
        </div>
      </Section>

      <Section id="projects" index={4} title="Projects 🗂️">
        {
          data.projects.map((val, idx) => <ProjectCard key={idx} {...val} />)
        }
      </Section>

      <Section id="socials" index={5} title="Contact me 📞">
        <div className="flex w-full my-2">
          {
            data.socials.map((val, idx) => 
              <Logo key={idx} href={val.href}>
                <val.icon className="w-6 h-6 md:w-8 md:h-8" />
              </Logo>
            )
          }
        </div>
      </Section>
      </div>
      </div>
    </main>
  );
}

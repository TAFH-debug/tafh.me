"use client";
import Chip from "@/components/chip";
import EduCard from "@/components/edu-card";
import { Icons } from "@/components/icons";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const data = {
  about: "Full-stack web developer with a passion in cybersecurity. Active participant of hackathons & CTF competitions. \
  I like building desktop applications on Tauri. Also I solve algorithmic problems on Codeforces in my free time.",
  education: [
    {
      img: "/nfactorial.jpg",
      title: "nFactorial Incubator",
      content: "Startup incubator.",
      time: "June 2024 - August 2024"
    },
    {
      img: "/nspm.jpg",
      title: "National School of Physics and Maths",
      content: "Top 4 of the school, olympiad participant.",
      time: "Sept 2020 - June 2025"
    }
  ],
  socials: [
    {
      icon: Icons.github,
      href: "https://github.com/TAFH-debug"
    },
    {
      icon: Icons.linkedin,
      href: "https://www.linkedin.com/in/talim-aushakhman-5a2194225/"
    },
    {
      icon: Icons.email,
      href: "mailto:aushahman2007@gmail.com"
    }
  ],
  skills: [
    "Python",
    "C++",
    "FastAPI",
    "Next.js",
    "Svelte.js",
    "Rust",
    "Tauri",
    "Java",
    "MongoDB",
    "PostgreSQL",
    "Docker"
  ],
  projects: [
    {
      img: "/crypt.ico",
      title: "Crypt",
      content: "Password manager with Aes256Gcm encryption for your passwords.",
      skills: ["Tauri", "Rust", "Svelte.js"],
      href: "https://github.com/TAFH-debug/crypt"
    },
    {
      img: "/pygame_tools.png",
      title: "Pygame Tools",
      content: "Pygame library wrapper with some advanced game engine abstractions.",
      skills: ["Python"],
      href: "https://github.com/TAFH-debug/pygame_tools_tafh"
    }
  ],
  hackathons: [
    {
      name: "HackKz hackathon",
      description: "We made learning platform with cources & AI mentor feedback system. Got 1st place.",
      time: "July 2024"
    },
    {
      name: "nFactorial LLM Cup 2024",
      description: "Made AI Game Designer - AI that helps people to generate game assets, sprites and game plot with given idea. Got 4th place.",
      time: "Aug 2024"
    },
    {
      name: "PetHack",
      description: "It was my first real hackathon. Learned how to work in a team and got first glimpse of Django.",
      time: "April 2024"
    },
  ]
}

function Logo({ children, href, }: { children: React.ReactNode, href: string }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className="mx-3">
      <Link href={href}>
        {children}
      </Link>
    </motion.div>
  )
}

function Section({ children, id, duration, title, className }: { children: React.ReactNode, id: string, duration: number, title: string, className?: string }) {
  return (
    <BlurFade duration={duration} className="my-8">
    <section id={id} className={className}>
      <h2 className="text-xl md:text-3xl text-accent-foreground font-bold">{title}</h2>
      {children}
    </section>
    </BlurFade>
  )
}

const BLUR_FADE_DURATION = 0.4;

export default function Page() {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen overflow-x-hidden max-w-screen">
      <FlickeringGrid
        className="fixed inset-0 z-0 top-0 left-0 right-0"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={1600}
        width={1600}
      />
      <div className="flex flex-col items-center md:w-3/5 max-w-screen rounded-lg md:my-20 md:p-10 bg-accent relative overflow-x-hidden">
      <div className="max-w-screen m-2 p-5">
      <BlurFade duration={BLUR_FADE_DURATION}>
      <section id="title" className="flex items-center">
        <h1 className="text-2xl md:text-5xl font-bold md:mr-8">Hello, I&apos;m Talim Aushakhman👋</h1>
        <Image className="rounded-full w-20 md:w-40" alt="alt" src="/ava.jpg" width={100} height={100} />
      </section>
      </BlurFade>
      <Section id="about" duration={BLUR_FADE_DURATION * 2} title="About me ❓">
        <p className="text-muted-foreground md:text-lg">
          {data.about}
        </p>
      </Section>
      <Section id="education" duration={BLUR_FADE_DURATION * 2} title="Education 📖">
        {
          data.education.map((val, idx) =>
            <EduCard {...val} key={idx} /> 
          )
        }
      </Section>

      <Section id="skills" duration={BLUR_FADE_DURATION * 3} title="Skills ⚒️">
        <div className="flex flex-wrap">
          {
            data.skills.map((val, idx) => <Chip content={val} key={idx} /> )
          }
        </div>
      </Section>

      <Section id="projects" duration={BLUR_FADE_DURATION * 3} title="Projects 🗂️">
        {
          data.projects.map((val, idx) => <ProjectCard key={idx} {...val} />)
        }
      </Section>

      <Section id="socials" duration={BLUR_FADE_DURATION * 4} title="Contact me 📞">
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

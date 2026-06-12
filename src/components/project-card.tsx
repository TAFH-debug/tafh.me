"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Chip from "./chip";

interface ProjectCardProps {
  title: string;
  content: string;
  img: string;
  skills: string[];
  href: string;
  index?: number;
}

export default function ProjectCard({
  title,
  content,
  img,
  skills,
  href,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="glass-panel group my-3 block rounded-2xl p-5 transition-all hover:border-primary/40 hover:shadow-[0_0_40px_oklch(0.72_0.17_22/15%)]"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="relative shrink-0">
            <Image
              src={img}
              className="rounded-xl object-cover ring-2 ring-border transition-all group-hover:ring-primary/50"
              width={64}
              height={64}
              alt={title}
            />
            <motion.div
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"
              initial={false}
            >
              <ArrowUpRight className="h-3 w-3" />
            </motion.div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary md:text-xl">
              {title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">
              {content}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:max-w-[200px] md:justify-end">
          {skills.map((val, idx) => (
            <Chip content={val} key={idx} index={idx} />
          ))}
        </div>
      </div>
    </motion.a>
  );
}

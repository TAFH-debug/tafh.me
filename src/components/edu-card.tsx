"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EduCardProps {
  title: string;
  content: string;
  img: string;
  time: string;
  index?: number;
}

export default function EduCard({
  title,
  content,
  img,
  time,
  index = 0,
}: EduCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 4 }}
      className="glass-panel group my-3 flex items-center justify-between gap-4 rounded-2xl p-4 transition-all hover:border-primary/30"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="relative shrink-0">
          <Image
            src={img}
            className="rounded-xl object-cover ring-2 ring-border transition-all group-hover:ring-primary/40"
            width={52}
            height={52}
            alt={title}
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold md:text-lg">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{content}</p>
        </div>
      </div>
      <span className="shrink-0 font-mono text-xs text-muted-foreground md:text-sm">
        {time}
      </span>
    </motion.div>
  );
}

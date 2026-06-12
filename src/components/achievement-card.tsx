"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";

interface AchievementCardProps {
  name: string;
  description: string;
  time: string;
  img?: string;
  index?: number;
}

export default function AchievementCard({
  name,
  description,
  time,
  img,
  index = 0,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-panel group relative overflow-hidden rounded-2xl p-5 transition-all hover:border-primary/30"
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
      <div className="relative flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary/10 text-primary">
          {img ? (
            <Image
              src={img}
              alt={name}
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          ) : (
            <Trophy className="h-4 w-4" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-base font-semibold md:text-lg">
              {name}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {time}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

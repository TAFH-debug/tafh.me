"use client";

import { motion } from "framer-motion";

export default function Chip({
  content,
  index = 0,
}: {
  content: string;
  index?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="glass-panel mb-2 mr-2 inline-block cursor-default rounded-full border-primary/20 px-3.5 py-1.5 font-mono text-xs text-primary transition-colors hover:border-primary/50 hover:bg-primary/10 md:text-sm"
    >
      {content}
    </motion.span>
  );
}

"use client" 

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
 
interface ShiningTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export function ShiningText({ text, className, duration = 10 }: ShiningTextProps) {
  return (
    <motion.div
      className={cn(
        "bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-transparent",
        className
      )}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: duration,
        ease: "linear",
      }}
    >
      {text}
    </motion.div>
  );
}
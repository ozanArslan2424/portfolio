"use client";
import { motion } from "framer-motion";

const TECH = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Markdown",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Inkscape",
];

const techVariants = {
  initial: (index: number) => {
    return {
      opacity: 0,
      y: -50 * index,
    };
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index + 0.5,
        type: "spring",
        duration: 1,
      },
    };
  },
};

export const TechStack = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {TECH.map((tech, index) => (
        <motion.div
          variants={techVariants}
          initial="initial"
          animate="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          whileHover={{ scale: 1.1 }}
          key={index}
          className="bg-card/70 text-res-xs h-max cursor-default rounded-lg border px-3 py-1.5 font-semibold shadow-sm"
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
};

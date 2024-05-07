"use client";
import { motion } from "framer-motion";

export const Section = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.section
      className="card"
      initial={{
        opacity: 0,
        y: -50 * delay,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2 * delay,
          type: "spring",
          duration: 1,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

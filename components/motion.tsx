"use client";
import { motion } from "framer-motion";

export const Motion = ({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: delay ? -50 * delay : -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: delay ? 0.05 * delay : 0.05,
          type: "spring",
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

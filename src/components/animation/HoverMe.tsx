"use client";
import { motion } from "framer-motion";

const viewport = { once: true };

export const HoverMe = (
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) => {
  return (
    <motion.div
      initial={{ y: -10 }}
      whileInView={{ y: 10 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      {...props}
    />
  );
};

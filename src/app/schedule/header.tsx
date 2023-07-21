"use client";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <div className='text-neutral-focus text-3xl font-semibold sm:text-4xl text-center py-14'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h1>Step into Self-Love: Our Class Calendar</h1>
      </motion.div>
    </div>
  );
}

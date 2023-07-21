"use client";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <div className="max-w-xl mx-auto sm:text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h3 className=" text-3xl font-semibold sm:text-4xl">
          Grace in Motion: Our Gallery
        </h3>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <p className="text-secondary-content mt-3">
          Immerse yourself in the captivating elegance and unity of our
          community. Witness the empowering journey through dance, where every
          step is a celebration of self-love and personal growth.
        </p>
      </motion.div>
    </div>
  );
}

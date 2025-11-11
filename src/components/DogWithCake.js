import React from "react";
import { motion } from "framer-motion";

export default function DogWithCake() {
  return (
    <motion.div
      className="absolute bottom-10 left-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/dog.png"
        alt="dog"
        style={{ height: "300px", width: "300px" }}
      />
    </motion.div>
  );
}

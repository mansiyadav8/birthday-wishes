import React from "react";
import { motion } from "framer-motion";

export default function Door({ onClick, doorOpen }) {
  return (
    <motion.img
      src="/door.png"
      alt="door"
      className="absolute bottom-10 left-10 cursor-pointer"
      animate={{
        opacity: doorOpen ? 0 : 1,          // fade out
        filter: doorOpen ? "blur(8px)" : "none", // blur when opening
        scale: doorOpen ? 0.9 : 1,          // optional shrink effect
      }}
      transition={{ duration: 1 }}
      onClick={!doorOpen ? onClick : undefined}
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "0 0 150px 150px", // semicircular top if needed
      }}
    />
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function BottomDecorations() {
  const decorations = [
    { src: "/star.png", size: 60, left: "2%", message: "you shine brighter than my phone screen" },
    { src: "/butterfly.png", size: 50, left: "15%", message: "still got butterflies for you" },
    { src: "/garden.png", size: 70, left: "25%", message: "lets build a garden together" },
    { src: "/heart.png", size: 55, left: "35%", message: "You’re Love" },
    { src: "/bike.png", size: 45, left: "45%", message: "engine’s loud, heart louder" },
    { src: "/light.png", size: 50, left: "60%", message: "You’re just like these calm lights — quietly starting all the happiness around" },
  ];

  return (
    <div className="absolute bottom-0 w-full h-32 overflow-visible">
      {decorations.map((item, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            bottom: "3%",
            left: item.left,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          whileHover={{ scale: 1.2 }}
        >
          {/* Balloon or light image */}
          <motion.img
            src={item.src}
            alt="decoration"
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              cursor: "pointer",
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Tooltip message */}
          <div
            className="tooltip-message"
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              fontSize: "12px",
              padding: "4px 8px",
              borderRadius: "8px",
              marginTop: "6px",
              opacity: 0,
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              pointerEvents: "none",
            }}
          >
            {item.message}
          </div>
        </motion.div>
      ))}

      {/* Simple hover effect with CSS */}
      <style>{`
        .tooltip-message {
          visibility: hidden;
        }
        div:hover > .tooltip-message {
          visibility: visible;
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }
      `}</style>
    </div>
  );
}

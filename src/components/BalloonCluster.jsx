import React from "react";
import { motion } from "framer-motion";

const BalloonCluster = ({ className = "", style = {} }) => {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Balloon 1 */}
      <motion.img
        src="/balloon1.png"
        alt="balloon1"
        style={{
          position: "absolute",
          top: "100px",
          width: "600px",
          zIndex: 2,
          right: "-130px",
          transform: "rotate(20deg)",
        }}
        animate={{
          y: [0, -20, 0], // float up and down
          rotate: [20, 22, 18, 20], // small natural sway
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Balloon 2 */}
      <motion.img
        src="/balloon3.png"
        alt="balloon2"
        style={{
          position: "absolute",
          top: "100px",
          width: "500px",
          zIndex: 2,
          right: "176px",
          transformOrigin: "center bottom",
        }}
        animate={{
          y: [0, -25, 0],
          rotate: [-15, -13, -17, -15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Balloon 3 */}
      <motion.img
        src="/balloon4.png"
        alt="balloon3"
        style={{
          position: "absolute",
          top: "-24px",
          width: "550px",
          zIndex: 1,
          right: "30px",
          transform: "rotate(3deg)",
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [3, 5, 1, 3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default BalloonCluster;

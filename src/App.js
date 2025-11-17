import React, { useState } from "react";
import BalloonCluster from "./components/BalloonCluster";
import HeroSection from "./components/HeroSection";
import Door from "./components/Door";
import DogWithCake from "./components/DogWithCake";
import './App.css';
import confetti from "canvas-confetti";
import BottomDecorations from "./components/BottomDecorations";

export default function App() {
    const [doorOpen, setDoorOpen] = useState(false);

    const handleDoorClick = () => {
      setDoorOpen(true);

      const duration = 1.5 * 1000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // randomly spread confetti across screen
        confetti({
          particleCount,
          spread: 90,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2, // allow some confetti above screen
          },
        });
      }, 200);
  };

  return(
    <div className="app-container">
      <div className="left-section">
        <div className="left-top-section">
          <HeroSection />
        </div>
        <div className="left-bottom-section">
          <div className="door-dog">
            <Door onClick={handleDoorClick} doorOpen={doorOpen} />
            {doorOpen && <DogWithCake />}
          </div>
        </div>
      </div>

      <div className="right-section">
        <BalloonCluster />
      </div>
      <BottomDecorations />
    </div>
  )
}

import React, { useState, useEffect, useRef } from "react";
import styles from "./Floatingbadges.module.css";

const NUM_BADGES = 5; // Number of badges
const BADGE_SIZE = 50; // Size of each badge in px
const SPEED = 2; // Pixels per frame

const FloatingBadges = () => {
  const containerRef = useRef(null);
  const [badges, setBadges] = useState([]);

  // Initialize badges
  useEffect(() => {
    const initialBadges = [];
    for (let i = 0; i < NUM_BADGES; i++) {
      initialBadges.push({
        id: i,
        x: Math.random() * 300, // initial random position
        y: Math.random() * 300,
        dx: (Math.random() - 0.5) * SPEED * 2, // random speed direction
        dy: (Math.random() - 0.5) * SPEED * 2,
      });
    }
    setBadges(initialBadges);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setBadges((prevBadges) => {
        return prevBadges.map((badge, idx, arr) => {
          let { x, y, dx, dy } = badge;
          const container = containerRef.current;
          const width = container.clientWidth;
          const height = container.clientHeight;

          // Move badge
          x += dx;
          y += dy;

          // Bounce off walls
          if (x <= 0 || x + BADGE_SIZE >= width) dx = -dx;
          if (y <= 0 || y + BADGE_SIZE >= height) dy = -dy;

          // Check collision with other badges
          arr.forEach((other) => {
            if (other.id !== badge.id) {
              const distX = x - other.x;
              const distY = y - other.y;
              const distance = Math.sqrt(distX * distX + distY * distY);
              if (distance < BADGE_SIZE) {
                // Simple bounce: reverse directions
                dx = -dx;
                dy = -dy;
              }
            }
          });

          return { ...badge, x, y, dx, dy };
        });
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="badge"
          style={{
            left: badge.x,
            top: badge.y,
            width: BADGE_SIZE,
            height: BADGE_SIZE,
          }}
        >
         Hello- The button content
        </div>
      ))}
    </div>
  );
};

export default FloatingBadges;

// import { useEffect, useRef } from "react";
// import { useState } from "react";
// import styles from "./Floatingbadges.module.css";

// const totalBadges = 4;
// const badgeSide = 50;
// const speed = 2;

// function Floatingbadges() {
//   const containerRef = useRef(null);
//   const [badge, setBadge] = useState([]);

//   useEffect(() => {
//     const initialBadges = [];
//     for (let i = 0; i < totalBadges; i++) {
//       initialBadges.push({
//         id: i,
//         x: Math.random() * 300,
//         y: Math.random() * 300,
//         dx: (Math.random() - 0.5) * speed * 2,
//         dy: (Math.random() - 0.5) * speed * 2,
//       });
//     }
//     setBadge(initialBadges);
//   }, []);

//   return (
//     <div ref={containerRef} className={styles.container}>
//       {badge.map((b) => (
//         <div key={b.id} className={styles.badge}>
//           Hello-This is the button text
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Floatingbadges;

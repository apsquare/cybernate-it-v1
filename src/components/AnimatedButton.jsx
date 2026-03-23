import styles from "./Button.module.css";
import BtnVideo from "../assets/BtnVideo.mp4";
import { useRef } from "react";

// Animation not added

function Button({ onClick, children }) {
  const videoRef = useRef(null);
  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
  };

  return (
    <button
      className={styles.btn}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ----- */}

      <video
        ref={videoRef}
        muted
        loop
        preload="metadata"
        className={styles.btnVideo}
      >
        <source src={BtnVideo} type="video/mp4"></source>
      </video>

      {/* --- */}
      <span className={styles.btnText}> {children}</span>
    </button>
  );
}

export default Button;

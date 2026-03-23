import { useState, useRef, useEffect } from "react";
import styles from "./ScrollReveal.module.css";

function ScrollReveal({ children, className = "", style }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${styles.hidden} ${isVisible ? styles.show : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;

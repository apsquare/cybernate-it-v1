import styles from "./Button.module.css";

function Button({ height, width, children, type, onClick }) {
  return (
    <button
      type={type}
      style={{ height: height, width: width }}
      className={styles.container}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

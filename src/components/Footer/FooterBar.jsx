import styles from "../Footer/FooterBar.module.css";
import SocialMedia from "../Footer/SocialMedia.svg";
import Submit from "../../assets/Submit.svg";
import { useNavigate, useLocation } from "react-router-dom";

function FooterBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);
    console.log(location);
    e.target.reset();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0 });
    }
  };
  return (
    <footer className={styles.footer}>
      {/* ------------------------Left------------------------ */}
      <div className={styles.left}>
        <div className={styles.footerTitle}>
          Cybernate IT Services & Consulting
        </div>
        <div className={styles.footerText}>
          Your elite squad for modern data & cloud platforms ©2026 Cybernate IT.
          All rights reserved.
        </div>
        <img
          src={SocialMedia}
          alt="SocialMedia"
          className={styles.socialMedia}
        ></img>
      </div>
      {/* -----------------------------Right------------------------ */}

      <form className={styles.right} onSubmit={handleSubmit}>
        <div className={styles.rightTitle}>Wanna Discovery Call ??</div>
        <div className={styles.rightTitle}>
          <label>Email : </label>
          <input name="Phone" required className={styles.inputBox}></input>
        </div>
        <div className={styles.rightTitle}>
          <label>Phone : </label>
          <input name="Phone" required className={styles.inputBox}></input>
        </div>
        <button className={styles.sendButton} type="submit">
          <img src={Submit} alt="Send" className={styles.sendImg}></img>
        </button>
      </form>
    </footer>
  );
}

export default FooterBar;

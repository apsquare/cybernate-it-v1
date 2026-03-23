import HeroImage from "./HeroImage.png";
import Navbar from "./Navbar";
import styles from "./Hero.module.css";
import Button from "./Button";
import HowWePlugIn from "./HowWePlugIn";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div
      className={styles.heroImage}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <Navbar />
      <div className={styles.heroText}>
        <div className={styles.abilities}>
          <div>Data&CloudExperts</div>
          <div>.</div>
          <div>Databricks</div>
          <div>.</div>
          <div>Snowflake</div>
          <div>.</div>
          <div>Bigquery</div>
          <div>.</div>
          <div>Fabric</div>
        </div>
        <div className={styles.title}>
          Build modern data platforms that scale effortlessly, backed by an
          elite consulting squad that ships results fast.
        </div>
        <div className={styles.miniText}>
          Cybernate IT Services & Consulting designs, builds, and operates
          cloud-native data platforms with product-team speed—without the limits
          of a traditional vendor.
        </div>
        <Button onClick={() => navigate("/Services")}>Discover</Button>
      </div>
    </div>
  );
}

export default Hero;

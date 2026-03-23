import styles from "./Process.module.css";
import Tiles from "./Tiles.svg";
import Button from "./Button";
import RightImage1 from "./RightImage1.svg";
import RightImage2 from "./RightImage2.svg";
import RightImage3 from "./RightImage3.svg";
import RightArrow from "./RightArrow.svg";
import LeftArrow from "./LeftArrow.svg";
import ScrollReveal from "./Scrolling/ScrollReveal";
import { useContactContext } from "./Contact/ContactContext";
function Process() {
  const { setShowContactPopup } = useContactContext();
  const handleClick = () => {
    setShowContactPopup(true);
  };

  return (
    <div className={styles.container}>
      {/*---------------- Left ------------------*/}
      <div className={styles.left} style={{ backgroundImage: `url(${Tiles})` }}>
        <ScrollReveal className={styles.leftTitle}>
          Designed for <br />
          real delivery,
          <br /> not just
          <br /> architecture diagrams
        </ScrollReveal>
        <ScrollReveal className={styles.leftText}>
          We care about what happens when your engineers touch the platform
          every day.
        </ScrollReveal>
        <ScrollReveal>
          <Button onClick={handleClick}>Explore</Button>
        </ScrollReveal>
      </div>

      {/* ---------------------Right---------------------- */}
      <div className={styles.right}>
        {/* RightBox1         */}

        <ScrollReveal className={styles.imageContainer}>
          <img
            src={RightImage1}
            alt="RightImage1"
            className={styles.rightImage1}
          />
        </ScrollReveal>
        {/* ----------------------Box2------------------- */}
        <ScrollReveal>
          <div className={styles.rightTitle}>Operator-first design</div>
          <div className={styles.rightText}>
            We think about how pipelines are monitored, debugged and evolved —
            not only how they look in a diagram.
          </div>
        </ScrollReveal>

        {/* /--------------------Box3----------------- */}

        <ScrollReveal>
          <div className={styles.rightTitle}>Cloud-agnostic patterns</div>
          <div className={styles.rightText}>
            Approaches that transfer across AWS, Azure and GCP so you’re not
            locked into one vendor's jargon.
          </div>
        </ScrollReveal>

        {/* /----------------------Box4--------------- */}

        <ScrollReveal className={styles.imageContainer}>
          <img
            src={RightImage2}
            alt="RightImage2"
            className={styles.rightImage2}
          />
        </ScrollReveal>

        {/* /------------------Box5------------------- */}
        <ScrollReveal className={styles.imageContainer}>
          <img
            src={RightImage3}
            alt="RightImage3"
            className={styles.rightImage3}
          />
        </ScrollReveal>
        {/* /-------------------Box6------------------ */}
        <ScrollReveal>
          <div className={styles.rightTitle}>Teaching as we build</div>
          <div className={styles.rightText}>
            We intentionally pair, explain and document so your team can take
            over with confidence.
          </div>
        </ScrollReveal>

        {/* -------------------Arrows----------------- */}
        <ScrollReveal>
          <img
            src={LeftArrow}
            alt="leftArrow"
            className={styles.LeftArrow}
          ></img>
        </ScrollReveal>

        <ScrollReveal>
          <img
            src={RightArrow}
            alt="RightArrow"
            className={styles.RightArrow}
          ></img>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default Process;

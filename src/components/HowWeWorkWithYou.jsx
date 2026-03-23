import styles from "./HowWeWorkWithYou.module.css";
import Button from "./Button";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "./Scrolling/ScrollReveal";

function HowWeWorkWithYou() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <ScrollReveal className={styles.circularRegion}>
        <div className={styles.circularHeading}>How We work with you??</div>

        <div className={styles.circularText1}>
          Simple, opinionated engagement model that keeps stakeholders aligned
          and work moving.
        </div>

        <ul className={styles.circularText2}>
          <li>Living documentation, not just slide decks</li>
          <li>Templates for pipelines, models and tests</li>
          <li>Environment and deployment patterns you can reuse</li>
          <li>
            Up-skilled engineers who understand the “why”, not only the “how”
          </li>
        </ul>

        <div className={styles.btn}>
          <Button onClick={() => navigate("./CaseStudy")}>
            Example engagements
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal className={styles.step1}>
        <div className={styles.Title1}>
          Discovery
          <br />
          &
          <br />
          baseline
        </div>

        <div className={styles.textBox1}>
          <div className={styles.Text1}>
            We map your current systems, pain points and constraints in plain
            language, not just diagrams.
          </div>
        </div>
      </ScrollReveal>

      <div className={styles.step2}>
        <ScrollReveal className={styles.Title2}>
          Architecture
          <br />
          &
          <br />
          plan
        </ScrollReveal>

        <ScrollReveal className={styles.textBox2}>
          {/* CHANGED: styles.Text2 -> styles.text2 */}
          <ScrollReveal className={styles.text2}>
            We propose a pragmatic target architecture, migration plan and scope
            slices that deliver value early.
          </ScrollReveal>
        </ScrollReveal>
      </div>

      <div className={styles.step3}>
        <ScrollReveal className={styles.Title3}>
          Build,
          <br />
          validate
          <br />
          &
          <br />
          enable
        </ScrollReveal>

        <ScrollReveal className={styles.textBox3}>
          {/* CHANGED: styles.Text3 -> styles.text3 */}
          <ScrollReveal>
            We build with your team, validate outputs against existing processes
            and train your people as we go.
          </ScrollReveal>
        </ScrollReveal>
      </div>

      <img className={styles.one} src={one} alt="one" />
      <img className={styles.two} src={two} alt="two" />
      <img className={styles.three} src={three} alt="three" />
    </div>
  );
}

export default HowWeWorkWithYou;

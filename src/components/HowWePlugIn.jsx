import Button from "./Button";
import styles from "./HowWePlugIn.module.css";
import Tiles from "./Tiles.svg";
import CurverArrow1 from "../assets/CurveArrow1.svg";
import CurveArrow2 from "../assets/CurveArrow2.svg";
import ScrollReveal from "./Scrolling/ScrollReveal";
import { useNavigate } from "react-router-dom";

function HowWePlugIn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Services");
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* Container1 */}
        <ScrollReveal>
          <div className={styles.leftTitle}>Greenfield data platforms</div>
          <div className={styles.leftText}>
            Design and stand up a modern data platform from scratch with clear
            environments, governance and deployment practices from day zero.
          </div>
          <ul className={styles.leftText}>
            <li>Architecture blueprints and reference patterns</li>
            <li>Landing, curated and semantic layers</li>
            <li>DataOps, CI/CD and observability baked in</li>
          </ul>
        </ScrollReveal>

        {/* arrow1 */}

        <img src={CurverArrow1} alt="Arrow1" className={styles.arrow1} />
        {/* container2 */}
        <ScrollReveal>
          <div className={styles.leftTitle}>Legacy migrations & cleanup</div>
          <div className={styles.leftText}>
            Replatform brittle ETL and reports into clean ELT, dbt models and
            cloud warehouses without losing business logic.
          </div>
          <ul className={styles.leftText}>
            <li>On-prem → Snowflake, BigQuery, Databricks, Fabric</li>
            <li>HRMS / ERP / time-tracking data migrations</li>
            <li>Data quality, validation, and parity checks.</li>
          </ul>
        </ScrollReveal>

        {/* Container3 */}
        <ScrollReveal>
          <div className={styles.leftTitle}>Team enablement & training</div>
          <div className={styles.leftText}>
            Upskill engineers and analysts so they can maintain and extend the
            platform confidently after the initial build.
          </div>
          <ul className={styles.leftText}>
            <li>Cloud & data engineering bootcamps</li>
            <li>Certification-oriented learning plans</li>
            <li>Playbooks, patterns and templates</li>
          </ul>
        </ScrollReveal>

        <img src={CurveArrow2} alt="Arrow2" className={styles.arrow2}></img>

        {/* container4 */}
        <ScrollReveal>
          <div className={styles.leftTitle}>Team enablement & training</div>
          <div className={styles.leftText}>
            Upskill engineers and analysts so they can maintain and extend the
            platform confidently after the initial build.
          </div>
          <ul className={styles.leftText}>
            <li>Cloud & data engineering bootcamps</li>
            <li>Certification-oriented learning plans</li>
            <li>Playbooks, patterns and templates</li>
          </ul>
        </ScrollReveal>
      </div>

      <div
        className={styles.right}
        style={{ backgroundImage: `url(${Tiles})` }}
      >
        <ScrollReveal className={styles.largeText}>
          Plug <br />
          into
          <br />
          Cybernate
        </ScrollReveal>
        <ScrollReveal className={styles.miniText}>
          Think of us as an extension of your internal data team for the
          high-leverage, hard-to-staff problems.
        </ScrollReveal>
        <ScrollReveal>
          <Button onClick={handleClick}>Check Out</Button>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default HowWePlugIn;

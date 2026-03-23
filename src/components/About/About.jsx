import Navbar from "../Navbar";
import styles from "./About.module.css";
import { useContactContext } from "../Contact/ContactContext";
import Button from "../Button";
import FooterBar from "../Footer/FooterBar";

function About() {
  const { setShowContactPopup } = useContactContext();

  const handleClick = (e) => {
    e.preventDefault();
    setShowContactPopup(true);
  };
  return (
    <div className={styles.completeScreen}>
      <Navbar />
      {/* ---------------------------Header------------------------ */}
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          Practical data & cloud consulting for real-world teams.
        </div>
        <div className={styles.headerText}>
          We help organizations design, build and operate modern data and cloud
          platforms with confidence — grounded in hands-on delivery, not just
          decks.
        </div>
      </div>
      {/* -------------------------------Container1------------------------------ */}
      <div className={styles.container1}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.containerTitle}>Who we are :</div>

            <div className={styles.containerText}>
              <p>
                Cybernate IT Services & Consulting is a specialized data and
                cloud consulting partner focused on building robust,
                future-ready data platforms.
              </p>
              <p>
                We bring hands-on experience from real projects across data
                engineering, cloud migrations, modern data warehouses and
                training programs. Our approach is practical, collaborative and
                focused on outcomes.
              </p>
            </div>
          </div>

          <div className={styles.topRight}>
            <div className={styles.containerTitle}>Mission & values :</div>
            <ul>
              <li>
                Embedded mindset: we behave like an extension of your internal
                team, not a separate silo.
              </li>
              <li>
                Transparent communication: clear tradeoffs, simple language, and
                regular check-ins.
              </li>
              <li>
                Code + docs: we leave behind working assets and documentation,
                not just PowerPoint.
              </li>
              <li>
                Long-term view: we design for what happens after go-live —
                operations, handover and evolution.
              </li>
            </ul>
            <div className={styles.containerText}></div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.containerTitle}>Founder-led engagements :</div>
          <div className={styles.containerText}>
            Cybernate engagements are led by practitioners who have been in the
            critical path of deliveries — designing architectures, reviewing
            pull requests, and debugging production data issues.
          </div>
          <div className={styles.miniText}>
            You are not dealing with an anonymous offshore team. You work with
            people who care about long-term maintainability.
          </div>
        </div>
      </div>
      {/* ------------------------------Container2----------------------------- */}
      <div className={styles.container1}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.containerTitle}>
              Technologies & platforms :
            </div>

            <div className={styles.containerText}>
              We have experience across a broad range of data and cloud
              technologies, including:
              <ul>
                <li>
                  <strong>Cloud platforms: </strong> AWS, Azure, GCP
                </li>
                <li>
                  <strong>Data platforms: </strong> Snowflake, BigQuery,
                  Databricks, Microsoft Fabric
                </li>
                <li>
                  <strong>Data engineering: </strong> dbt, Airflow, PySpark,
                  Python-based ETL/ELT
                </li>
                <li>
                  <strong>DevOps & DataOps: </strong> CI/CD, infrastructure as
                  code, testing and observability
                </li>
              </ul>
              <div className={styles.miniText}>
                We keep up with the ecosystem, but focus on patterns and
                principles over tool-of-the-month trends.
              </div>
            </div>
          </div>

          <div className={styles.topRight}>
            <div className={styles.containerTitle}>
              How we show up on projects :
            </div>
            <ul>
              <li>
                Embedded mindset: we behave like an extension of your internal
                team, not a separate silo.
              </li>
              <li>
                Transparent communication: clear tradeoffs, simple language, and
                regular check-ins.
              </li>
              <li>
                Code + docs: we leave behind working assets and documentation,
                not just PowerPoint.
              </li>
              <li>
                Long-term view: we design for what happens after go-live —
                operations, handover and evolution.
              </li>
            </ul>
            <div className={styles.containerText}></div>
          </div>
        </div>
      </div>
      {/* -----------------------------------Container-3-------------------------- */}
      <div className={styles.invitation}>
        <div className={styles.invitationLeft}>
          <div className={styles.invitationTitle}>
            Curious if we're the right fit for your team ?
          </div>
          <div className={styles.invitationText}>
            We're happy to have an initial conversation and share a perspective
            on your data and cloud roadmap.
          </div>
        </div>
        <Button onClick={handleClick}>Talk to an architect</Button>
      </div>
      <FooterBar className={styles.footerBar}></FooterBar>
    </div>
  );
}

export default About;

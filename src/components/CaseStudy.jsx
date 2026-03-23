import styles from "./CaseStudy.module.css";
import Navbar from "./Navbar";
import Contact from "./Contact/Contact";
import { useContactContext } from "./Contact/ContactContext";
import FooterBar from "./Footer/FooterBar.jsx";

function CaseStudy() {
  const { setShowContactPopup } = useContactContext();

  const handleClick = () => {
    setShowContactPopup(true);
  };

  return (
    <div className={styles.completeScreen}>
      <Navbar className={styles.navigation}></Navbar>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            Representative work from Cybernate engagements
          </div>
          <div className={styles.headerText}>
            Illustrative examples of how we help clients modernize their data
            platforms and upskill teams without exposing confidential details.
          </div>
        </div>
        {/* ----------------Content -------------------- */}

        <div className={styles.workForce} onClick={handleClick}>
          <div className={styles.contentTitle}>
            Enterprise HR data migration to a modern analytics platform:
          </div>

          <div className={styles.innerContext}>
            <div className={styles.innerTitle}>Client context</div>
            <div className={styles.innerText}>
              A large organization was running multiple legacy HR systems and
              time-tracking tools.
              <br /> Reporting was slow, fragmented and relied on manual data
              pulls.
            </div>
          </div>

          <div className={styles.badgeWrap}>
            <div className={styles.badges}>Services / HR</div>
            <div className={styles.badges}>Data Migration and Analytics</div>
            {/* <div className={styles.badges}></div> */}
          </div>

          <div className={styles.WhatWeDid}>
            <div className={styles.innerTitle}>What we did</div>
            <ul className={styles.innerText}>
              <li>Assessed existing HR data sources, models and reports</li>
              <li>Defined a target cloud-based HR analytics platform</li>
              <li>
                Designed and implemented pipelines to ingest HR and
                time-tracking data
              </li>
              <li>
                Implemented curated views and data marts for HR analytics and
                compliance
              </li>
            </ul>
          </div>
          <div className={styles.outcomes}>
            <div className={styles.innerTitle}>Outcomes</div>
            <ul className={styles.innerText}>
              <li>
                Single, trusted source of HR data for analytics and dashboards
              </li>
              <li>
                Significant reduction in time spent preparing compliance and
                management reports
              </li>
              <li>Improved visibility into workforce metrics and trends</li>
              <li>
                Foundation laid for future self-service analytics capabilities
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------ */}

        <div className={styles.workForce} onClick={handleClick}>
          <div className={styles.contentTitle}>
            Cloud data platform modernization for analytics at scale :
          </div>

          <div className={styles.innerContext}>
            <div className={styles.innerTitle}>Client context</div>
            <div className={styles.innerText}>
              The client had an on-premise data warehouse that struggled with
              performance and scaling.
              <br /> New analytics use cases were hard to deliver due to
              capacity and complexity limitations.
            </div>
          </div>

          <div className={styles.badgeWrap}>
            <div className={styles.badges}>Enterprise</div>
            <div className={styles.badges}>Cloud Data Platform</div>
          </div>

          <div className={styles.WhatWeDid}>
            <div className={styles.innerTitle}>What we did</div>
            <ul className={styles.innerText}>
              <li>
                Defined a target architecture on a modern cloud data platform
              </li>
              <li>Migrated critical workloads to the new platform in phases</li>
              <li>
                Introduced DataOps practices with CI/CD and automated testing
              </li>
              <li>
                Collaborated with teams to redesign key data models and
                pipelines
              </li>
            </ul>
          </div>
          <div className={styles.outcomes}>
            <div className={styles.innerTitle}>Outcomes</div>
            <ul className={styles.innerText}>
              <li>
                Improved query performance and scalability for analytics
                workloads
              </li>
              <li>Lower operational overhead and simplified maintenance</li>
              <li>Faster delivery of new features and reports</li>
              <li>Clearer ownership and governance of data assets</li>
            </ul>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------- */}

        <div className={styles.workForce} onClick={handleClick}>
          <div className={styles.contentTitle}>
            Data engineering training program for internal teams :
          </div>

          <div className={styles.innerContext}>
            <div className={styles.innerTitle}>Client context</div>
            <div className={styles.innerText}>
              An organization wanted to strengthen their internal capabilities
              in cloud data engineering, especially around best practices,
              tooling and real-world workflows.
            </div>
          </div>

          <div className={styles.badgeWrap}>
            <div className={styles.badges}>Multi-team IT</div>
            <div className={styles.badges}>Training & Enablement</div>
            {/* <div className={styles.badges}>NEW</div> */}
          </div>

          <div className={styles.WhatWeDid}>
            <div className={styles.innerTitle}>What we did</div>
            <ul className={styles.innerText}>
              <li>
                Designed a custom training curriculum aligned to the client's
                stack
              </li>
              <li>
                Delivered practical sessions with hands-on labs and
                mini-projects
              </li>
              <li>
                Shared design patterns, templates and checklists for daily work
              </li>
              <li>
                Provided guidance for relevant certifications and skill paths
              </li>
            </ul>
          </div>
          <div className={styles.outcomes}>
            <div className={styles.innerTitle}>Outcomes</div>
            <ul className={styles.innerText}>
              <li>
                Teams more confident in designing and implementing data
                pipelines
              </li>
              <li>
                Greater alignment on standards and patterns across projects
              </li>
              <li>
                Faster ramp-up for new hires and cross-functional collaboration
              </li>
              <li>
                Improved quality and reliability of data solutions delivered
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}

export default CaseStudy;

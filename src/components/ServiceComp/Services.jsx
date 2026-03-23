import Navbar from "../Navbar";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useContactContext } from "../Contact/ContactContext";
import FooterBar from "../Footer/FooterBar";

function Services() {
  const { setShowContactPopup } = useContactContext();

  const handleClick = (e) => {
    e.preventDefault();
    setShowContactPopup(true);
  };

  return (
    <div className={styles.completeScreen}>
      <Navbar className={styles.navigation}></Navbar>
      {/* ------------------Page-Header-------------------- */}
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          End-to-end data & cloud consulting.
        </div>
        <div className={styles.headerText}>
          Cybernate IT plugs into your roadmap where you need senior data
          engineering and cloud expertise the most — from greenfield platforms
          to migrations and capability building.
        </div>
      </div>
      {/* ---------------------------Box1----------------------------- */}
      <div className={styles.featureContainer}>
        <div className={styles.featureContainerTitle}>
          1. Data Engineering & Analytics Foundations
        </div>
        <div className={styles.featureContainerMiniText}>
          Ideal when you're consolidating data and want clean, reusable
          patterns.
        </div>
        <div className={styles.featureContainerText}>
          We design and implement robust data engineering foundations that can
          scale with your business. The focus is on maintainable,
          well-documented pipelines and clear data contracts.
        </div>

        <div className={styles.splitBox}>
          <div className={styles.splitBoxLeft}>
            <div className={styles.splitBoxTitle}>What we help with :</div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>
                  Designing ETL / ELT pipelines for batch and near real-time
                  data
                </li>
                <li>
                  Data modeling for analytics (star/snowflake schemas, data
                  vault, etc.)
                </li>
                <li>
                  Curated data marts and semantic layers for BI and reporting
                </li>
                <li>
                  Implementing DataOps practices - version control, CI/CD,
                  testing
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.splitBoxRight}>
            <div className={styles.splitBoxTitle}>Example outcomes :</div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>
                  Consistent, trusted data for dashboards and decision-making
                </li>
                <li>
                  Reduced manual data wrangling by analysts and business teams
                </li>
                <li>
                  Clear lineage from sources to reports, simplifying impact
                  analysis
                </li>
                <li>
                  Faster onboarding for new engineers thanks to standardized
                  patterns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* -------Box2------ */}
      <div className={styles.featureContainer}>
        <div className={styles.featureContainerTitle}>
          2. Cloud Data Platforms & Architecture
        </div>
        <div className={styles.featureContainerMiniText}>
          For teams moving to Snowflake, BigQuery, Databricks or Microsoft
          Fabric.
        </div>
        <div className={styles.featureContainerText}>
          We architect and implement cloud-native data platforms using
          technologies like Snowflake, BigQuery, Databricks and Microsoft
          Fabric, running on AWS, Azure or GCP.
        </div>

        <div className={styles.splitBox}>
          <div className={styles.splitBoxLeft}>
            <div className={styles.splitBoxTitle}>What we help with :</div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>Platform architecture and reference patterns</li>
                <li>
                  Workload design across storage, compute and orchestration
                </li>
                <li>Security, governance, RBAC and environment strategies</li>
                <li>Cost optimization and capacity planning</li>
              </ul>
            </div>
          </div>
          <div className={styles.splitBoxRight}>
            <div className={styles.splitBoxTitle}>
              Technologies we work with :
            </div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>Cloud: AWS, Azure, GCP</li>
                <li>
                  Warehouses/Lakehouses: Snowflake, BigQuery, Databricks,
                  Microsoft Fabric
                </li>
                <li>
                  Orchestration & tooling: Airflow, dbt, Terraform and more
                </li>
              </ul>
              <div className={styles.splitBoxText}>
                We focus on practical designs that your teams can own and
                operate, not one-off “black box” solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------Box3------------ */}
      <div className={styles.featureContainer}>
        <div className={styles.featureContainerTitle}>
          3. Data Migration & Modernization
        </div>
        <div className={styles.featureContainerMiniText}>
          When legacy ETL, reports or HR/ERP systems are holding you back.
        </div>
        <div className={styles.featureContainerText}>
          Many organizations are stuck with legacy BI, ETL and data warehouse
          systems that are hard to maintain. We help them migrate to modern
          cloud-native platforms in a structured, low-risk way.
        </div>

        <div className={styles.splitBox}>
          <div className={styles.splitBoxLeft}>
            <div className={styles.splitBoxTitle}>What we help with :</div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>Assessment of current data landscape and pain points</li>
                <li>Migration roadmap and phased execution strategy</li>
                <li>Replatforming ETL jobs to modern tools and frameworks</li>
                <li>Validating data quality and functional parity</li>
              </ul>
            </div>
          </div>
          <div className={styles.splitBoxRight}>
            <div className={styles.splitBoxTitle}>Typical scenarios :</div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>
                  Legacy → Cloud (on-prem DW to Snowflake/BigQuery/Databricks)
                </li>
                <li>On-prem → SaaS products (e.g., HRMS, ERP, time tracking</li>
                <li>
                  Consolidation of multiple data silos into a unified platform
                </li>
                <li>
                  Performance and reliability improvements for key reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* --------------Box4----------------- */}
      <div className={styles.featureContainer}>
        <div className={styles.featureContainerTitle}>
          4. Training & Enablement
        </div>
        <div className={styles.featureContainerMiniText}>
          Blended engagements where we build and teach side by side.
        </div>
        <div className={styles.featureContainerText}>
          Sustainable platforms require capable teams. We run focused training
          programs tailored to your technology stack and current maturity.
        </div>

        <div className={styles.splitBox}>
          <div className={styles.splitBoxLeft}>
            <div className={styles.splitBoxTitle}>What we offer :</div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>Corporate training for engineering and analytics teams</li>
                <li>
                  Certification-oriented programs (cloud, data engineering
                  tools)
                </li>
                <li>Hands-on labs and mini-projects based on your use cases</li>
                <li>Playbooks and best-practice guides for your teams</li>
              </ul>
            </div>
          </div>
          <div className={styles.splitBoxRight}>
            <div className={styles.splitBoxTitle}>Example outcomes :</div>
            <div className={styles.splitBoxText}>
              <ul>
                <li>
                  Teams confident in using the chosen cloud and data tools
                </li>
                <li>Shared language and standards across engineering groups</li>
                <li>Faster delivery through reusable patterns and templates</li>
                <li>
                  Higher adoption of the data platform across the organization
                </li>
              </ul>
              <Button height="55px" width="150px" onClick={handleClick}>
                Discuss a training plan →
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------Invitation--Talk to architect------------------------------------- */}
      <div className={styles.invitation}>
        <div className={styles.invitationLeft}>
          <div className={styles.invitationTitle}>
            Not sure which service you need?
          </div>
          <div className={styles.invitationText}>
            Tell us where you are in your data platform journey and we'll
            suggest a sensible starting point.
          </div>
        </div>
        <Button onClick={handleClick}>Talk to an architect</Button>
      </div>
      {/* ---- */}
      <FooterBar className={styles.footer}></FooterBar>
    </div>
  );
}

export default Services;

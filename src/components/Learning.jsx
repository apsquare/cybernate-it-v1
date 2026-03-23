import styles from "./Learning.module.css";
import ArchitecturalInsights from "../assets/ArchitecturalInsights.svg";
import Training from "../assets/Training.svg";
import CaseStudy from "../assets/CaseStudy.svg";
import ExpertDeepDives from "../assets/ExpertDeepDives.svg";
import SandSetting from "../assets/SandSetting.svg";
import ScrollReveal from "./Scrolling/ScrollReveal";

function Learning() {
  return (
    <div className={styles.container}>
      <ScrollReveal className={styles.darkBlue}>
        <img
          src={ArchitecturalInsights}
          alt="architecturalInsights"
          className={styles.architectureImg}
        ></img>
        <div className={styles.title}>Architectural Insights</div>
        <div className={styles.text}>
          A series of short, focused articles that break down real design
          decisions from enterprise projects.
          <br />
          <br />
          Each piece explores the reasoning, trade-offs, and challenges behind
          key choices.
          <br />
          <br />
          Practical insights you can directly apply to your own systems and
          solutions.
        </div>
      </ScrollReveal>
      {/* -----------------------LightBlue------------------------- */}
      <ScrollReveal className={`${styles.title}  ${styles.lightBlue} `}>
        Learn from
        <br />
        real-world
        <br />
        patterns
      </ScrollReveal>

      {/* -----------------------------Mint1---------------------------------- */}
      <ScrollReveal className={`${styles.mint1} `}>
        <img
          src={CaseStudy}
          alt="CaseStudyImage"
          className={styles.caseStudyImg}
        ></img>
        <div className={styles.title}>Case studies</div>
        <div className={`${styles.text} ${styles.mint1} `}>
          See representative examples of migrations, data platforms and training
          programs we’ve delivered.
        </div>
      </ScrollReveal>

      {/* ------------------------------------Brown--------------------------------- */}
      <ScrollReveal className={styles.expertDeepDive}>
        <div className={styles.expertImage}>
          <img
            src={ExpertDeepDives}
            alt="expertDeepDiveImage"
            className={styles.expertImage}
          ></img>
        </div>
        <div className={styles.expertText}>
          <div className={styles.title}>
            Expert Deep
            <br />
            Dives
          </div>
          <div className={styles.text}>
            Deep-dive YouTube walkthroughs unpacking real platform designs.
            <br />
            Trade-offs, technical decisions, and implementation—clearly
            explained.
          </div>
        </div>
      </ScrollReveal>
      {/* -------------------------------------Sand------------------------------- */}
      <ScrollReveal className={styles.sand}>
        <img
          src={SandSetting}
          alt="SandSetting"
          className={styles.settingImg}
        ></img>
        <div className={styles.settingTitle}>
          Tool Integrations <br />& Automation
          <br />
          Recipes
        </div>
        <div className={styles.settingText}>
          Build seamless workflows with step-by-step automation recipes and tool
          integrations.
          <br />
          Connect platforms, streamline pipelines, and turn repetitive tasks
          into smart, efficient processes that let you focus on insights and
          impact.
        </div>
      </ScrollReveal>

      {/* --------------------------------------Mint2-Absolutely positioned--------------------- */}

      <ScrollReveal className={styles.training}>
        <img
          src={Training}
          alt="Training"
          className={styles.trainingImage}
        ></img>
      </ScrollReveal>

      <ScrollReveal className={styles.mint2Title}>
        Training
        <br />
        tracks
      </ScrollReveal>
      <ScrollReveal className={styles.mint2Text}>
        Accelerate your team’s journey with structured learning paths that guide
        them from mastering the fundamentals to unlocking advanced data
        engineering expertise—covering everything from pipelines and cloud
        architectures to Snowflake, BigQuery, Databricks, and beyond—empowering
        them to build, scale, and innovate with confidence.
      </ScrollReveal>
    </div>
  );
}

export default Learning;

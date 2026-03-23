import styles from "../Footer/Footer.module.css";
import FooterBar from "./FooterBar";
import FooterImage from "./FooterImage.jpg";
import Open from "../../assets/Open.svg";
import Button from "../../components/Button";
import { useState } from "react";
import { useContactContext } from "../../components/Contact/ContactContext";
import ScrollReveal from "../Scrolling/ScrollReveal";

function Footer() {
  const [openIndex, setOpenIndex] = useState(null);
  const { setShowContactPopup } = useContactContext();
  const onClick = (e) => {
    e.preventDefault();
    setShowContactPopup(true);
  };

  const toggleBox = (index) => {
    if (openIndex == index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${FooterImage})` }}
    >
      <div className={styles.mainContent}>
        <ScrollReveal className={styles.header}>
          <div className={styles.headerTitle}>Questions teams often ask us</div>
          <div className={styles.headerText}>
            Here's how typical engagements with Cybernate IT work in practice.
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.faqWrapper}>
          <div className={styles.contentBox}>
            <div className={styles.questionRow}>
              <div className={styles.contentText}>
                Do you only do one-time projects or ongoing advisory as well?
                {openIndex == 1 && (
                  <div className={styles.dropDown}>
                    We do both. Some clients engage us for a focused migration
                    or platform build. Others keep us as an ongoing advisor or
                    fractional architect to guide their internal teams.
                  </div>
                )}
              </div>
              <button
                className={styles.contentButton}
                onClick={() => toggleBox(1)}
              >
                <img
                  src={Open}
                  alt="open"
                  className={`${styles.contentImage} ${openIndex === 1 ? styles.rotate : ""}`}
                />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.faqWrapper}>
          <div className={styles.contentBox}>
            <div className={styles.questionRow}>
              <div className={styles.contentText}>
                Which tech stacks do you usually work with?
                {openIndex == 2 && (
                  <div className={styles.dropDown}>
                    Most of our work is on AWS, Azure or GCP with Snowflake,
                    BigQuery, Databricks or Microsoft Fabric, plus tools like
                    dbt, Airflow, Terraform and Python-based pipelines.
                  </div>
                )}
              </div>
              <button
                className={styles.contentButton}
                onClick={() => toggleBox(2)}
              >
                <img
                  src={Open}
                  alt="open"
                  className={`${styles.contentImage} ${openIndex === 2 ? styles.rotate : ""}`}
                />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.faqWrapper}>
          <div className={styles.contentBox}>
            <div className={styles.questionRow}>
              <div className={styles.contentText}>
                Can you train our team as part of an implementation?
                {openIndex == 3 && (
                  <div className={styles.dropDown}>
                    Yes. We prefer blended engagements where we build together
                    with your team and run targeted training sessions, so the
                    knowledge stays inside your organization.
                  </div>
                )}
              </div>

              <button
                className={styles.contentButton}
                onClick={() => toggleBox(3)}
              >
                <img
                  src={Open}
                  alt="open"
                  className={`${styles.contentImage} ${openIndex === 3 ? styles.rotate : ""}`}
                />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.buttonWrap}>
          <Button
            height={70}
            width={190}
            className={styles.GetInTouchButton}
            onClick={onClick}
          >
            Get In Touch
          </Button>
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <FooterBar />
      </ScrollReveal>
    </div>
  );
}

export default Footer;

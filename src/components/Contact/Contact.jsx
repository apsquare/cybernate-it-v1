import styles from "./Contact.module.css";
import Button from "../Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "./ContactContext";

function Contact() {
  const [isChecked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { setShowContactPopup } = useContactContext();

  const handleClose = (e) => {
    e.preventDefault();
    setShowContactPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = { ...Object.fromEntries(formData), subscribe: isChecked };
    console.log(data);
    handleClose(e);
    navigate("/");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.rightContainer}>
        <div className={styles.rightTitle}>
          “Don't worry"
          <br />
          "We've got you covered.”
        </div>

        <div className={styles.startConversation}>
          <div className={styles.startConversationTitle}>
            Start a conversation :
          </div>
          <div className={styles.startConversationText}>
            Whether you're planning a migration, modernizing an existing
            platform, or exploring training for your teams, we'd be happy to
            discuss how we can help.
          </div>

          <div className={styles.socialMedia}>
            <div className={styles.socialMediaTitle}>
              Email:{" "}
              <a className={styles.socialMediaText}>contact@cybernateit.com</a>
            </div>

            <div className={styles.socialMediaTitle}>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/feed/"
                target="_self"
                rel="noopener noreferrer"
                className={`${styles.socialMediaText} ${styles.link}`}
              >
                {" "}
                View Profile
              </a>
            </div>

            <div className={styles.socialMediaTitle}>
              Calendly :
              <a
                href="https://calendly.com/"
                target="_self"
                rel="noopener noreferrer"
                className={`${styles.socialMediaText} ${styles.link}`}
              >
                Schedule a call
              </a>
            </div>
          </div>

          <div className={styles.footerNote}>
            **You can use the form here or email us directly. We typically
            respond within a few business days.
          </div>
        </div>

        <div className={styles.checkBoxAndLabel}>
          <input
            className={styles.rightCheckBox}
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setChecked(e.target.checked)}
          ></input>
          <label>Would you like to subscribe to out monthly newsletter ?</label>
        </div>
      </div>

      <div className={styles.leftContainer}>
        <h2 className={styles.title}>Contact :</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.labelandinput}>
            <label>Name*: </label>
            <input type="text" name="name" required />
          </div>

          <div className={styles.labelandinput}>
            <label>Email*: </label>
            <input type="text" name="email" required />
          </div>

          <div className={styles.labelandinput}>
            <label>Phone*:</label>
            <input type="text" name="phone" required />
          </div>

          <div className={styles.labelandinput}>
            <label>Message*:</label>
            <textarea type="text" rows="4" name="message" required />
          </div>
          <div className={styles.buttons}>
            <Button type="submit">Send Message</Button>
            <Button onClick={handleClose} type="button">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

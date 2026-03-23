import styles from "./Navbar.module.css";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Contact from "./Contact/Contact";
import { useContactContext } from "./Contact/ContactContext";
import Services from "../components/ServiceComp/Services";

function Navbar() {
  const { showContactPopup, setShowContactPopup } = useContactContext();

  useEffect(() => {
    if (showContactPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showContactPopup]);

  const handleContact = () => {
    setShowContactPopup(true);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={Logo} alt="companyLogo" className={styles.logo} />
      </Link>
      {/* ------------------Navigation-Link------------------------------- */}
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/Services" className={styles.link}>
          Services
        </Link>
        <Link to="/CaseStudy" className={styles.link}>
          Case-Studies
        </Link>
        <Link to="/About" className={styles.link}>
          About
        </Link>
        <button className={styles.contactButton} onClick={handleContact}>
          Contact
        </button>
      </div>
      {showContactPopup && (
        <Contact onClose={() => setShowContactPopup(false)}></Contact>
      )}
      {/* -------------------------------------------------------------------------- */}
    </nav>
  );
}

export default Navbar;

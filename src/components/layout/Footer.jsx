import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  function click(e) {}
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <Link className={styles.copy_rightLink} to="/">
          <span>managerApp</span>
        </Link>{" "}
        &copy; 2026
      </p>
    </footer>
  );
}

export default Footer;

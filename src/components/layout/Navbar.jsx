import Container from "./Container";

import styles from "./Navbar.module.css";

import logo from "../../img/costs_logo.png";

function Navbar({ Link }) {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="ícone do managerApp" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Ínicio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contacto</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;

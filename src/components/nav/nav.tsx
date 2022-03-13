import styles from "./nav.module.scss";
import logo from "assets/images/logo.svg";

import { BiDesktop, BiUser, BiMessageAltDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <div className={styles.fixed_layout}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo} />
        <section className={styles.link_wrapper}>
          <a href="#projects" className={styles.link}>
            <BiDesktop className={styles.link_icon} />
            Projects
          </a>
          <a href="#about" className={styles.link}>
            <BiUser className={styles.link_icon} />
            About
          </a>
          <a href="#contact" className={styles.link}>
            <BiMessageAltDetail className={styles.link_icon} />
            Contact
          </a>
        </section>
      </nav>
    </div>
  );
};

export default Nav;

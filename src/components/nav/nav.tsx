import styles from "./nav.module.scss";
import logo from "assets/images/logo.svg";

import { BiDesktop, BiUser, BiMessageAltDetail } from "react-icons/bi";

import { navLinks } from "static/navLinks";

const Nav = () => {
  return (
    <div className={styles.fixed_layout}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo} />
        <section className={styles.link_wrapper}>
          {navLinks.map((link) => {
            return (
              <a href={link.href} className={styles.link} key={link.name}>
                {link.icon}
                {link.name}
              </a>
            );
          })}
        </section>
      </nav>
    </div>
  );
};

export default Nav;

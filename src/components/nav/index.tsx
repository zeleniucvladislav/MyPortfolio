import { FC, ReactElement } from "react";
import { useContentfulImage } from "utils/hooks/useContentfulImage";
import type { Props } from "./types";

import { navLinks } from "static/navLinks";
import styles from "./nav.module.scss";

const Nav: FC<Props> = ({ logo }): ReactElement => {
  const imageUrl = useContentfulImage(logo);

  return (
    <div className={styles.fixed_layout}>
      <nav className={styles.nav}>
        <img src={imageUrl} alt="logo" className={styles.logo} />
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

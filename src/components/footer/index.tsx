import { memo, ReactElement } from "react";

import links from "static/links";
import styles from "./footer.module.scss";

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      {links.map((link) => {
        return (
          <a
            key={link.url}
            className={styles.footer_icon}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        );
      })}
    </footer>
  );
};

export default memo(Footer);

import { memo, ReactElement } from "react";
import { IoArrowDown } from "react-icons/io5";

import Notebook from "assets/images/notebook.svg";
import styles from "./homepage.module.scss";

const Homepage = (): ReactElement => {
  return (
    <div className={styles.wrapper} id="homepage">
      <section className={styles.left_col}>
        <h1>
          Vladislav <span className={styles.marked_text}>Zeleniuc</span>
        </h1>
        <h2>Frontend developer at Brizy</h2>
        <p>
          I'm passionate creating splendid
          <br />
          <span className={styles.marked_text}>web applications</span>
        </p>
        <a href="#projects">
          <button>
            My Projects
            <IoArrowDown />
          </button>
        </a>
      </section>
      <section className={styles.right_col}>
        <img src={Notebook} alt="Notebook illustration" />
      </section>
    </div>
  );
};

export default memo(Homepage);

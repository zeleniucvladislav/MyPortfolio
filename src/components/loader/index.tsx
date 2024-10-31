import { ReactElement } from "react";
import styles from "./loader.module.scss";

const Loader = (): ReactElement => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Loader;

import { FC, ReactElement } from "react";

import type { Props } from "./types";

import styles from "./notification.module.scss";

const Notification: FC<Props> = ({ message }): ReactElement => {
  return (
    <section className={styles.wrapper}>
      <span className={styles.message}>{message}</span>
    </section>
  );
};

export default Notification;

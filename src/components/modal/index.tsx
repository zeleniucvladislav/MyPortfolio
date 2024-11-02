import { FC, ReactElement } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import type { Props } from "./types";

import styles from "./modal.module.scss";

const Modal: FC<Props> = ({ text, color }): ReactElement => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <BiMessageAltDetail
          className={styles.modal__icon}
          style={{ color: color }}
        />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;

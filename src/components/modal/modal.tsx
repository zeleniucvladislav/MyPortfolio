import { BiMessageAltDetail } from "react-icons/bi";

import styles from "./modal.module.scss";

type Props = {
  text: string;
  color: string;
};

const Modal = ({ text, color }: Props) => {
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

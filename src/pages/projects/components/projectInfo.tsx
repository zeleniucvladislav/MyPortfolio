import { FiExternalLink } from "react-icons/fi";
import styles from "./project.module.scss";

type Props = {
  title: string;
  description: string;
  url: string;
};

const ProjectInfo = ({ title, description, url }: Props) => {
  return (
    <section className={styles.info}>
      <h2 className={styles.overline}>Featured Project</h2>
      <a href={url} target="_blank" rel="noreferrer" className={styles.link}>
        <h1 className={styles.link_name}>{title}</h1>
        <FiExternalLink className={styles.link_icon} />
      </a>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default ProjectInfo;

import { FiExternalLink } from "react-icons/fi";
import type { Project } from "types/portfolioData";
import { FC, ReactElement } from "react";

import styles from "./project.module.scss";

type Props = Omit<Project["fields"], "image">;

const ProjectInfo: FC<Props> = ({ name, description, link }): ReactElement => {
  return (
    <section className={styles.info}>
      <h2 className={styles.overline}>Featured Project</h2>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        <h1 className={styles.link_name}>{name}</h1>
        <FiExternalLink className={styles.link_icon} />
      </a>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default ProjectInfo;

import { FC, ReactElement } from "react";
import type { Project as Props } from "types/portfolioData";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";

import "aos/dist/aos.css";
import styles from "./project.module.scss";

const Project: FC<Props["fields"]> = ({
  image,
  name,
  description,
  link,
}): ReactElement => {
  return (
    <article className={styles.wrapper} data-aos="fade-up">
      <ProjectImage image={image} link={link} />
      <ProjectInfo name={name} description={description} link={link} />
    </article>
  );
};
export default Project;

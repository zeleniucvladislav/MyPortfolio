import { FC, ReactElement, useEffect } from "react";
import type { Project as Props } from "types/portfolioData";
import Aos from "aos";
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
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <article className={styles.wrapper} data-aos="fade-up">
      <ProjectImage image={image} link={link} />
      <ProjectInfo name={name} description={description} link={link} />
    </article>
  );
};
export default Project;

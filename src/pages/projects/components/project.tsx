import { useEffect } from "react";
import Aos from "aos";
import ProjectImage from "./projectImage";
import ProjectInfo from "./projectInfo";

import "aos/dist/aos.css";
import styles from "./project.module.scss";

type Props = {
  image: any;
  title: string;
  description: string;
  url: string;
};

const Project = ({ image, title, description, url }: Props) => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <article className={styles.wrapper} data-aos="fade-up">
      <ProjectImage image={image} url={url} />
      <ProjectInfo title={title} description={description} url={url} />
    </article>
  );
};
export default Project;

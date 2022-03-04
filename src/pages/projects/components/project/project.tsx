import { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import styles from "./project.module.scss";
import ProjectImage from "./components/projectImage";
import ProjectInfo from "./components/projectInfo";

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
      <ProjectInfo title={title} description={description} />
    </article>
  );
};
export default Project;

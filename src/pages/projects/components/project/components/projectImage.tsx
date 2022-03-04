import LazyLoad from "react-lazyload";

import styles from "../project.module.scss";

const ProjectImage = ({ image, url }: any) => {
  return (
    <section className={styles.image_container}>
      <a href={url} target="_blank" rel="noreferrer">
        <LazyLoad>
          <img src={image} alt="project" className={styles.image} />
        </LazyLoad>
      </a>
    </section>
  );
};

export default ProjectImage;
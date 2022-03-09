import LazyLoad from "react-lazyload";

import styles from "./project.module.scss";

type Props = {
  image: any;
  url: string;
};

const ProjectImage = ({ image, url }: Props) => {
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

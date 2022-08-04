import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./project.module.scss";

type Props = {
  image: any;
  url: string;
};

const ProjectImage = ({ image, url }: Props) => {
  return (
    <section className={styles.image_container}>
      <a href={url} target="_blank" rel="noreferrer">
        <LazyLoadImage alt="project" src={image} className={styles.image} />
      </a>
    </section>
  );
};

export default ProjectImage;

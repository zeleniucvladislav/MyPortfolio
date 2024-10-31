import { FC, ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContentfulImage } from "utils/hooks/useContentfulImage";
import type { Project } from "types/portfolioData";

import styles from "./project.module.scss";

type Props = Pick<Project["fields"], "image" | "link">;

const ProjectImage: FC<Props> = ({ image, link }): ReactElement => {
  const imageUrl = useContentfulImage(image);

  return (
    <section className={styles.image_container}>
      <a href={link} target="_blank" rel="noreferrer">
        <LazyLoadImage alt="project" src={imageUrl} className={styles.image} />
      </a>
    </section>
  );
};

export default ProjectImage;

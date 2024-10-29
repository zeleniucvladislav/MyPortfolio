import { LazyLoadImage } from "react-lazy-load-image-component";
import type { Project } from "types/portfolioData";
import { getImageUrl } from "utils/imageUrl";
import { FC, ReactElement, useMemo } from "react";

import styles from "./project.module.scss";

type Props = Pick<Project["fields"], "image" | "link">;

const ProjectImage: FC<Props> = ({ image, link }): ReactElement => {
  const imageUrl = useMemo(() => getImageUrl(image), [image]);

  return (
    <section className={styles.image_container}>
      <a href={link} target="_blank" rel="noreferrer">
        <LazyLoadImage alt="project" src={imageUrl} className={styles.image} />
      </a>
    </section>
  );
};

export default ProjectImage;

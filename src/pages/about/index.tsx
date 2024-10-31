import { FC, ReactElement, useEffect } from "react";
import Aos from "aos";
import { GoTriangleRight } from "react-icons/go";
import { useContentfulImage } from "utils/hooks/useContentfulImage";
import { Props } from "./types";

import "aos/dist/aos.css";
import styles from "./about.module.scss";

const About: FC<Props> = ({
  description,
  profileImage,
  technologies,
}): ReactElement => {
  const imageUrl = useContentfulImage(profileImage);

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <div className={styles.wrapper} id="about">
      <h1 className="page-heading">ABOUT ME</h1>
      <div className={styles.content}>
        <section className={styles.left_col}>
          <p className={styles.about_me} data-aos="fade-right">
            {description}
          </p>
          <section className={styles.technologies} data-aos="fade-up">
            <p>Here are a few technologies I've been working with recently:</p>
            <section className={styles.technologies_list}>
              {technologies.map((tech) => {
                return (
                  <p className={styles.technology} key={tech}>
                    <GoTriangleRight className={styles.technology_icon} />
                    {tech}
                  </p>
                );
              })}
            </section>
          </section>
        </section>
        <img
          src={imageUrl}
          alt="me"
          className={styles.image}
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default About;
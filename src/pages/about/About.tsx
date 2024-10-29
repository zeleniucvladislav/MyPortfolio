import { FC, ReactElement, useEffect, useMemo } from "react";
import Aos from "aos";
import { GoTriangleRight } from "react-icons/go";
import "aos/dist/aos.css";
import styles from "./about.module.scss";
import { Props } from "./types";
import { getImageUrl } from "utils/imageUrl";

const About: FC<Props> = ({
  description,
  profileImage,
  technologies,
}): ReactElement => {
  const imageUrl = useMemo(() => getImageUrl(profileImage), [profileImage]);

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

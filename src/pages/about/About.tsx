import { useEffect } from "react";
import Aos from "aos";

import { GoTriangleRight } from "react-icons/go";

import "aos/dist/aos.css";
import styles from "./about.module.scss";

import me from "assets/images/about.jpg";

const About = () => {
  const technologies = ["JavaScript", "TypeScript", "React", "Redux", "SASS"];

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <div className={styles.wrapper} id="about">
      <h1 className="page-heading">ABOUT ME</h1>
      <div className={styles.content}>
        <section className={styles.left_col}>
          <p className={styles.about_me} data-aos="fade-right">
            Hello! My name is
            <span className={styles.marked_text}> Zeleniuc Vladislav</span>. I'm
            web developer from Chisinau, Moldova who loves tech and would like
            to help as many people as possible. My main tech focus is
            JavaScript/TypeScript and it's UI library named React, with a keen
            interest in Python and Vue. Also I am passionate to web design
            because it helps to understand core concepts of UI/UX experience
            that leads to a better application overall. Beside programming I'm
            passionate to sports like football and running.
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
        <img src={me} alt="me" className={styles.image} data-aos="fade-left" />
      </div>
    </div>
  );
};

export default About;

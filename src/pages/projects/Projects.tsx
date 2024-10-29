import Project from "./components/project";
import styles from "./projects.module.scss";
import { FC, ReactElement } from "react";
import { Props } from "./types";

const Projects: FC<Props> = ({ projects }): ReactElement => {
  return (
    <div className={styles.wrapper} id="projects">
      <h2 className="page-heading">PROJECTS</h2>
      <section className={styles.projects_list}>
        {projects.map(
          ({ fields: { description, image, link, name }, sys: { id } }) => {
            return (
              <Project
                key={id}
                image={image}
                name={name}
                description={description}
                link={link}
              />
            );
          }
        )}
      </section>
    </div>
  );
};

export default Projects;

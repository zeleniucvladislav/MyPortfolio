import Project from "./components/project/project";
import styles from "./projects.module.scss";

import projects from "../../data/projects";

const Projects = () => {
  return (
    <div className={styles.wrapper} id="projects">
      <h2 className="page-heading">MY PROJECTS</h2>
      <section className={styles.projects_list}>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Projects;

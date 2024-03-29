import Project from "./components/project";
import styles from "./projects.module.scss";

import projects from "static/projects";

const Projects = () => {
  return (
    <div className={styles.wrapper} id="projects">
      <h2 className="page-heading">PROJECTS</h2>
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

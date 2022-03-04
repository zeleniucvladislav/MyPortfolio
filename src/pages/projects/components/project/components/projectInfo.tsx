import styles from "../project.module.scss";

type Props = {
  title: string;
  description: string;
};

const ProjectInfo = ({ title, description }: Props) => {
  return (
    <section className={styles.info}>
      <h2 className={styles.overline}>Featured Project</h2>
      <h1 className={styles.name}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default ProjectInfo;

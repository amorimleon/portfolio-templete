import { ProjectList } from "./ProjectList";
import { projects } from "../../data/projects.js";
import styles from "../ProjectSection/style.module.css";

export const ProjectSection = () => {
  return (
    <section className={`container ${styles.project__container}`}>
      <h2 className="title2">Projetos</h2>
      <ul className={styles.card__box}>
        {projects.map((project) => {
          return (
            <ProjectList
              key={project.name}
              name={project.name}
              description={project.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

import { technologies } from "../../data/technologies";
import styles from "../TechSection/style.module.css";

export const TechSection = () => {
  let id = 1;
  return (
    <section className={`container ${styles.tech_container}`}>
      <h2 className="title2">Tecnologias</h2>
      <ul className={styles.card_box}>
        {technologies.map((technology) => {
          return (
            <li className={styles.card} key={technology.name}>
              <img src={technology.img} alt={technology.name} />
              <p className="title3">{technology.name} </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

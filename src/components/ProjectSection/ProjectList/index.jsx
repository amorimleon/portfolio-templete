import git from "../../../assets/git-icon.png";
import styles from "../../ProjectSection/style.module.css";

export const ProjectList = ({ name, description }) => {
  return (
    <li className={styles.card}>
      <div className={styles.card__header}>
        <h3 className="title3">{name}</h3>
        <img src={git} alt="" />
      </div>
      <p className="paragraph">{description}</p>
      <a className={styles.knew_more} href="#">
        Saiba mais
      </a>
    </li>
  );
};

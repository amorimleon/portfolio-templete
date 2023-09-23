import styles from "../Header/style.module.css";
import logo from "../../assets/portfolio.png";

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <img src={logo} alt="logo" />
      <div className={styles.menu}>
        <p className={styles.text}>Sobre</p>
        <p className={styles.text}>Stack</p>
        <p className={styles.text}>Projetos</p>
      </div>
      <button className={styles.contact__button}>Contato</button>
    </header>
  );
};

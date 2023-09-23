import { username } from "../../data/user";
import styles from "../BannerSection/style.module.css";

export const BannerSection = () => {
  return (
    <section className={`container ${styles.banner__container}`}>
      <div className={styles.info__box}>
        <p className={styles.name}>{username}</p>
        <h1 className="title1">Bem vindo ao meu portfólio</h1>
        <p className="paragraph">Uma frase interessante sobre mim</p>
        <button className={styles.know_more}>Saiba mais</button>
      </div>

      <img src="./src/assets/banner-img.png" alt="" />
    </section>
  );
};

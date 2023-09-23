import whatsapp from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import github from "../../assets/github-icon.png";
import { user } from "../../data/user";
import styles from "../Footer/style.module.css";

export const Footer = () => {
  return (
    <footer className={`container ${styles.footer__container}`}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__box}>
          <h2 className="title2">Contatos</h2>
          <div className={styles.imgs__box}>
            <img src={whatsapp} alt="whatsapp-icon" />
            <img src={linkedin} alt="linkedin-icon" />
            <img src={github} alt="github-icon" />
          </div>
        </div>
        <p>Todos os direitos reservados - {user}</p>
      </div>
    </footer>
  );
};

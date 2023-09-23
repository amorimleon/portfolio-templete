import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../DefaultPage/style.module.css";
export const DefaultPage = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

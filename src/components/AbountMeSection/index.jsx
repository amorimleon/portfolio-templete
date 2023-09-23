import styles from "../AbountMeSection/style.module.css";

export const AboutMeSection = () => {
  return (
    <section className={`container ${styles.abountMe_box}`}>
      <h2 className={`title2 ${styles.abountMe}`}>Sobre mim</h2>
      <p className={`paragraph  ${styles.abountMe_paragraph}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna,
        imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum
        finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula
        enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper
        feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
      </p>
    </section>
  );
};

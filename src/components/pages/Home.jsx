import styles from "./Home.module.css";

import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>managerApp</span>
      </h1>
      <p>
        Crie os seus projecto e comece a gerenciá-los aqui, não perca mais
        tempo!
      </p>
      <LinkButton to="/newProject" text="Criar Projecto" />
      <img src={savings} alt="managerApp" />
    </section>
  );
}

export default Home;

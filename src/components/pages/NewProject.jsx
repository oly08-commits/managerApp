import ProjectForm from "../project/ProjctForm";

import styles from "./NewProject.module.css";

function NewProject() {
  return (
    <div className={styles.newProject_container}>
      <h1>Criar Projecto</h1>
      <p>Crie o seu projecto para em seguida adicionar os serviços</p>
      <ProjectForm btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;

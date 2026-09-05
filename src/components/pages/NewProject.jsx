import { useHistory } from "react-router-dom";

import ProjectForm from "../project/ProjctForm";

import styles from "./NewProject.module.css";

function NewProject() {
  const history = useHistory();

  function createPost(project) {
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http:/localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newProject_container}>
      <h1>Criar Projecto</h1>
      <p>Crie o seu projecto para em seguida adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;

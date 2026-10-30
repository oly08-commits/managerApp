import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjctForm";

import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();
  const url = "http://localhost:5000/projects";

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.newProject_container}>
      <h1>Criar Projecto</h1>
      <p>Crie o seu projecto para em seguida adicionar os serviços.</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;

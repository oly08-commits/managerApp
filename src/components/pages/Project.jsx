import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Project.module.css";

import Loading from "../layout/Loading";
import Container from "../layout/Container";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => setProject(data))
        .catch((error) => console.log(error));
    }, 750);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.name}
                  </p>
                  <p>
                    <span>Orçamento:</span> US$ {project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span> US$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <p>Detalhes do projeto</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

import styles from "./Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();

  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setProjects(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.project_title}>
        <h1>Projectos Registrados</h1>
        <LinkButton to="/newProject" text="Novo Projecto" />
      </div>
      {message && <Message msg={message} type="sucess" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category?.name}
            />
          ))}
      </Container>
    </div>
  );
}

export default Projects;

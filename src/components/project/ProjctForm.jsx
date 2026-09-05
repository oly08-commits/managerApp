import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form action="">
      <div>
        <input type="text" placeholder="Digite o nome do seu projeto" />
      </div>
      <div>
        <input type="number" placeholder="Digite o orçamento total" />
      </div>
      <div>
        <select name="categry_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar Projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;

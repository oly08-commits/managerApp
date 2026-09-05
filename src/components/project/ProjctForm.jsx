import Input from "../form/Input";
import SubmitBtn from "../form/SubmitBtn";
import Select from "../form/Select";

import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Digite o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Digite o orçamento total"
      />
      <SubmitBtn text={btnText} />
    </form>
  );
}

export default ProjectForm;

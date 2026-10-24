import styles from "./SubmitBtn.module.css";

function SubmitBtn({ text }) {
  return (
    <div className={styles.flex}>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitBtn;

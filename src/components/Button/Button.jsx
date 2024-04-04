import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.buttonContainer} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

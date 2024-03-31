import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.buttonContainer}>{text}</button>;
};

export default Button;

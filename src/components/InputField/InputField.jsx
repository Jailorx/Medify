import styles from "./InputField.module.css";
import searchIcon from "../../assets/search-icon.svg";

const InputField = ({ placeholder }) => {
  return (
    <div className={styles.inputFieldContainer}>
      <img src={searchIcon} alt="search_icon" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;

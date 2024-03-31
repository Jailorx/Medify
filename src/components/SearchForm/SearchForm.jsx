import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={styles.searchFormContainer}>
      <div className={styles.searchPanel}>
        <InputField placeholder="State" />
        <InputField placeholder="City" />
        <Button text="Search" />
      </div>
      <div className={styles.content}>You may be looking for</div>
    </div>
  );
};

export default SearchForm;

import InputField from "../InputField/InputField";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={styles.searchFormContainer}>
      <InputField placeholder="State" />
      <InputField placeholder="City" />
    </div>
  );
};

export default SearchForm;

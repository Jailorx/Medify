import Button from "../../../Button/Button";
import styles from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <div className={styles.navigationItemstemsContainer}>
      <a href="#">Find Doctors</a>
      <a href="#">Hospitals</a>
      <a href="#">Medicines</a>
      <a href="#">Surguries</a>
      <a href="#">Software for Provider</a>
      <a href="#">Facilities</a>
      <Button text="Login/Signup" />
    </div>
  );
};

export default NavigationItems;

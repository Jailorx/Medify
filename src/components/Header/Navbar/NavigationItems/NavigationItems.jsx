import Button from "../../../Button/Button";
import styles from "./NavigationItems.module.css";
import { Link, NavLink } from "react-router-dom";

const NavigationItems = ({ vertical }) => {
  return (
    <div
      className={`${styles.navigationItemstemsContainer} ${
        vertical ? styles.vertical : ""
      }`}
    >
      <a href="#">Find Doctors</a>
      <a href="#">Hospitals</a>
      <a href="#">Medicines</a>
      <a href="#">Surgeries</a>
      <a href="#">Software for Providers</a>
      <a href="#">Facilities</a>
      <Button text="My Bookings" />
    </div>
  );
};

export default NavigationItems;

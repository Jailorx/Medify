import Button from "../../../Button/Button";
import styles from "./NavigationItems.module.css";
import {NavLink } from "react-router-dom";

const NavigationItems = ({ vertical }) => {
  return (
    <div
      className={`${styles.navigationItemsContainer} ${
        vertical ? styles.vertical : ""
      }`}
    >
      <NavLink to="/doctors" activeClassName={styles.activeLink}>
        Find Doctors
      </NavLink>
      <NavLink to="/hospitals" activeClassName={styles.activeLink}>
        Hospitals
      </NavLink>
      <NavLink to="#" activeClassName={styles.activeLink}>
        Medicines
      </NavLink>
      <NavLink to="#" activeClassName={styles.activeLink}>
        Surgeries
      </NavLink>
      <NavLink to="#" activeClassName={styles.activeLink}>
        Software for Providers
      </NavLink>
      <NavLink to="#" activeClassName={styles.activeLink}>
        Facilities
      </NavLink>
      <NavLink to="/bookings" activeClassName={styles.activeLink}>
        <Button text="My Bookings" />
      </NavLink>
    </div>
  );
};

export default NavigationItems;

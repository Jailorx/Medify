import Logo from "./Logo/Logo";
import styles from "./Navbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <NavigationItems />
    </div>
  );
};

export default Navbar;

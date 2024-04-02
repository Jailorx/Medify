import { useState } from "react";
import Logo from "./Logo/Logo";
import styles from "./Navbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <MenuIcon style={{ backgroundColor: "#2aa7ff" }} />
      </div>
      <div
        className={`${styles.navigationItems} ${showMenu ? styles.show : ""}`}
      >
        <NavigationItems vertical={showMenu} />
      </div>
    </div>
  );
};

export default Navbar;

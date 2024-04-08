import WebsiteLogo from "../../../../assets/icon/medify-logo.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <img src={WebsiteLogo} alt="medify_website_logo" />
    </NavLink>
  );
};

export default Logo;

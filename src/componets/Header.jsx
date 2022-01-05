import HeaderStyle from "../css/Header.module.css";
import Logo from "../images/logo.svg";
import { useState } from "react";
import SideNavigation from "./headerComponets/SideNavigation";
import Fade from "react-reveal/Fade";

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div className={HeaderStyle.background}>
      <img src={Logo} alt="logo" className={HeaderStyle.siteLogo} />
      <div className={HeaderStyle.headerMiddleMenu}>
        <a href="https://www.w3schools.com">Model S</a>
        <a href="https://www.w3schools.com">Model 3</a>
        <a href="https://www.w3schools.com">Model X</a>
        <a href="https://www.w3schools.com">Model Y</a>
        <a href="https://www.w3schools.com">Solar Roof</a>
        <a href="https://www.w3schools.com">Solar Panels</a>
      </div>

      <div className={HeaderStyle.headerRightMenu}>
        <a
          className={HeaderStyle.rightMenuVisibility}
          href="https://www.w3schools.com"
        >
          Shop
        </a>
        <a
          className={HeaderStyle.rightMenuVisibility}
          href="https://www.w3schools.com"
        >
          Account
        </a>
        <a
          onClick={() => {
            setShowNavigation(true);
          }}
        >
          Menu
        </a>
      </div>

      {showNavigation && (
        <SideNavigation setShowNavigation={setShowNavigation} />
      )}
    </div>
  );
}

export default Header;

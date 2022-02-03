import HeaderStyle from "../css/Header.module.css";
import Logo from "../images/logo.svg";
import { useState } from "react";
import SideNavigation from "./headerComponets/SideNavigation";
import { useSelector } from "react-redux";

function Header() {
  const model = useSelector((state) => state.model);

  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div className={HeaderStyle.background}>
      <img src={Logo} alt="logo" className={HeaderStyle.siteLogo} />
      <div className={HeaderStyle.headerMiddleMenu}>
        {model.map((model, index) => (
          <a key={index} href="https://www.w3schools.com">
            {model}
          </a>
        ))}
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

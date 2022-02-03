import { IoIosClose } from "react-icons/io";
import HeaderStyle from "../../css/Header.module.css";
import Fade from "react-reveal/Fade";

function SideNavigation(props) {
  function HideNavigation() {
    props.setShowNavigation(false)
  }

  return (
    <Fade right>
    <div className={HeaderStyle.sideNavigation}>
      <div className={HeaderStyle.sideNavigationIcon}>
        <IoIosClose size={32} onClick={HideNavigation} />
      </div>

      <ul>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
      </ul>
    </div>
     </Fade>
  );
}

export default SideNavigation;

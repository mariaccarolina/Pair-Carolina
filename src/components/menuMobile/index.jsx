import "../../style/menumobile.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export function MenuMobile() {
  const [menuMobile, setMenuMobile] = useState(false);
  const defineMenu = () => {
    menuMobile === false ? setMenuMobile(true) : setMenuMobile(false);
  };
  const menuItems = () => {
    return (
      <>
        <li className="MenuItem">
          <a href="/" className="LinkToNavigation">
            ABOUT
          </a>
        </li>
        <li className="MenuItem">
          <a href="/" className="LinkToNavigation">
            RECIPES
          </a>
        </li>
        <li className="MenuItem">
          <a href="/" className="LinkToNavigation">
            SUBSCRIBE
          </a>
        </li>
        <li className="MenuItem">
          <a href="/" className="LinkToNavigation">
            ABOUT
          </a>
        </li>
      </>
    );
  };
  return (
    <>
      <button className="ButtonSetMenuMobile" onClick={defineMenu}>
        <AiOutlineMenu className="iconButtonMobile" />
      </button>
      <ul className="MenuMobile">
        {menuMobile === true ? menuItems() : false}
      </ul>
    </>
  );
}

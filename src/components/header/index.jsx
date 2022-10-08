import "../../style/header.scss";
import { MenuDefault } from "../menuDefault";
import { MenuMobile } from "../menuMobile";
export function Header() {
  return (
    <header className="Header">
      <div className="ConteinerItemsCenter">
        <div className="BoxLogoFakeLink">
          <a href="/">
            <img src="../../../imgs/logo/logo.png" alt="" className="Logo" />
          </a>
        </div>
        <nav className="Navigation">
          <MenuMobile/>
          <MenuDefault/>
        </nav>
      </div>
    </header>
  );
}

import {NavLink} from "react-router-dom";
import '../style/components/NavBar.scss';
import {pagesList} from "../routes.ts";

const NavBar = () => {

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {pagesList.map(page => (
          <li key={page.routes}>
            <NavLink to={page.routes}>{page.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
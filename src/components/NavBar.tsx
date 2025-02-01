import { NavLink } from "react-router-dom";
import '../style/components/NavBar.scss';

const NavBar = () => {

  interface pageListItem {
    label: string,
    routes: string,
  }

  const pagesList: pageListItem[] = [
    {label: 'Редагування вкладок', routes: '/section-edit'},
  ]

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
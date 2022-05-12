import { NavLink } from 'react-router-dom';

const getActiveLinkClassName = (isActive: boolean) => (isActive ? 'link link--active' : 'link');

const Header = () => (
  <div>
    <nav className="navigation">
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/characters"
      >
        Characters
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/episodes"
      >
        Episodes
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/Locations"
      >
        Locations
      </NavLink>
    </nav>
  </div>
);
export default Header;

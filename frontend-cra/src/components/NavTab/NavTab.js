import { HashLink as Link } from "react-router-hash-link";

function NavTab(props) {
  return (
    <nav className="nav-tab">
      <Link to="/#AboutProject" className="nav-tab__link link">
        О проекте
      </Link>
      <Link to="/#Techs" className="nav-tab__link link">
        Технологии
      </Link>
      <Link to="/#AboutMe" className="nav-tab__link link">
        Студент
      </Link>
    </nav>
  );
}

export default NavTab;

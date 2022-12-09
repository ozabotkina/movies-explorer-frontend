import { HashLink as Link } from 'react-router-hash-link';

function NavTab(props) {
  //Поставить якоря и на них ссылки
  return (
    <nav className="nav_tab">
      <Link to = "/#AboutProject" className="nav_tab__link link">О проекте</Link>
      <Link to = "/#Techs" className="nav_tab__link link">Технологии</Link>
      <Link to = "/#AboutMe" className="nav_tab__link link">Студент</Link>
    </nav>
  );
}

export default NavTab;

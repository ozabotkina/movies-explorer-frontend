import menuPath from "../../images/menu-icon.svg";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Header(props) {
  return (
    <header className={props.colorClass}>
      <div className="header__logo link">
        <Logo />
      </div>

      {props.loggedIn ? (
        <>
          {/* Видно на размере меньше 800. Откроет окно с навигацией */}
          <img
            className="header__short-menu link"
            src={menuPath}
            alt="короткое меню"
            onClick={props.shortMenuClick}
          />
          {/* Видно на размере больше 800. Откроет окно с профилем */}
          <div className="header__profile-link link">
            <ProfileMenu />
          </div>
        </>
      ) : (
        <div className="header__registration-menu">
          <Link
            to={"/signup"}
            className="header__registration-menu__register link"
          >
            Регистрация
          </Link>
          <Link
            to={"/signin"}
            className="header__registration-menu__signin link"
          >
            Войти
          </Link>
        </div>
      )}

      {props.loggedIn && (
        <nav className="header__navigation">
          <NavLink
            to={"/movies"}
            className="header__navigation__link link"
            activeClassName="header__navigation__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to={"/saved-movies"}
            className="header__navigation__link link"
            activeClassName="header__navigation__link_active"
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;

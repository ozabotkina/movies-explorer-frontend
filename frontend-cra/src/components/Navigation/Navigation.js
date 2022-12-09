import { NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Navigation(props) {
  return (
    <div className={props.isOpen ? "navpanel navpanel__visible" : "navpanel"}>
      <button className="navpanel__close-button" onClick={props.onCloseClick} />
      <nav className="navpanel__links">
        <NavLink
          exact
          to={"/"}
          className="navpanel__link link"
          activeClassName="navpanel__link_active"
          onClick={props.onCloseClick}
        >
          Главная
        </NavLink>

        <NavLink
          to={"/movies"}
          className="navpanel__link link"
          activeClassName="navpanel__link_active"
          onClick={props.onCloseClick}
        >
          Фильмы
        </NavLink>
        <NavLink
          to={"/saved-movies"}
          className="navpanel__link link"
          activeClassName="navpanel__link_active"
          onClick={props.onCloseClick}
        >
          Сохраненные фильмы
        </NavLink>
      </nav>
      <div className="navpanel__profile-menu" onClick={props.onCloseClick}>
        <ProfileMenu />
      </div>
    </div>
  );
}
export default Navigation;

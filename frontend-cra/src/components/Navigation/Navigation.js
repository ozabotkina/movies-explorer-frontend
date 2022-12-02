import { NavLink } from "react-router-dom";      

function Navigation(props) {
    return (
        <nav className="header__navigation">
        <NavLink to= {"/movies"} className="header__navigation__link" activeClassName="header__navigation__link_active"> Фильмы </NavLink>
        <NavLink to= {"/saved-movies"} className="header__navigation__link" activeClassName="header__navigation__link_active"> Сохраненные фильмы</NavLink>
        </nav> 
    ) ;
    }
    export default Navigation;
    

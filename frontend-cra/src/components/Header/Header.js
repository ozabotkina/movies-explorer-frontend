

import logoPath from "../../images/logo.svg";
import iconPath from "../../images/icon-man.svg";
import menuPath from "../../images/menu-icon.svg"
import { Link } from "react-router-dom";      

function Header(props) {
  return (
    <header className={props.colorClass}>
        <Link to= {"/main"}><img className="header__logo" src={logoPath} alt="место логотипа" /></Link>
       
       { props.loggedIn ?  
       <>
       {/* Видно на размере меньше 800. Откроет окно с навигацией */}
      <img className="header__short-menu" src = {menuPath} alt="короткое меню"/>
      {/* Видно на размере больше 800. Откроет окно с профилем */}
      <div className="header__profile-link">
            <div className="header__profile-link__text"> Аккаунт </div>
            <div className="header__profile-link__placeholder">
                <img className="header__profile-link__icon" src={iconPath} alt="иконка человечка" />
            </div>              
        </div>
       </>
       : <div className = "header__registration-menu">
         <Link to={"/signup"} className ="header__registration-menu__register">Регистрация</Link>
         <Link to={"/signin"} className ="header__registration-menu__signin">Войти</Link>

       </div> }
    </header>
  );
}

export default Header;
  




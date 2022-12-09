import { Link } from "react-router-dom";
import iconPath from "../../images/icon-man.svg";

function ProfileMenu() {
  return (
    <Link to={"/profile"} className="profile-link link">
      <div className="profile-link__text"> Аккаунт </div>
      <div className="profile-link__placeholder">
        <img
          className="profile-link__icon"
          src={iconPath}
          alt="иконка человечка"
        />
      </div>
    </Link>
  );
}

export default ProfileMenu;

import logoPath from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <img className="logo" src={logoPath} alt="место логотипа" />
    </Link>
  );
}

export default Logo;

import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function PopupWithForm(props) {
  return (
    <form className="entrance">
      <div className="entrance_form__top">
        <div className="entrance_form__logo link">
          <Logo />
        </div>

        <h2 className="entrance__title">{props.title}</h2>

        <div className="entrance_form">{props.children}</div>
      </div>
      <div className="entrance_form___lower">
        <button className="entrance_form_submit link">{props.button}</button>

        <div className="entrance_form__alternative">
          <p className="entrance_form__alternative__text">{props.text}</p>
          <Link
            to={props.link}
            className="entrance_form__alternative__link link"
          >
            {props.linktext}
          </Link>
        </div>
      </div>
    </form>
  );
}

export default PopupWithForm;

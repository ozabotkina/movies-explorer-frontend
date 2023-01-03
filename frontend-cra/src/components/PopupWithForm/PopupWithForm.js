import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function PopupWithForm(props) {
  return (
    <form className="entrance">
      <div className="entrance-form__top">
        <div className="entrance-form__logo link">
          <Logo />
        </div>

        <h2 className="entrance__title">{props.title}</h2>

        <div className="entrance-form">{props.children}</div>
      </div>
      <div className="entrance-form__lower">
        <button className="entrance-form__submit link">{props.button}</button>

        <div className="entrance-form__alternative">
          <p className="entrance-form__alt-text">{props.text}</p>
          <Link
            to={props.link}
            className="entrance-form__alt-link link"
          >
            {props.linktext}
          </Link>
        </div>
      </div>
    </form>
  );
}

export default PopupWithForm;

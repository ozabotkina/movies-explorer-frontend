import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login(props) {
  return (
    <PopupWithForm
      title="Рады видеть!"
      button="Войти"
      text="Ещё не зарегистрированы?"
      linktext="Регистрация"
      link="/signup"
    >
      <div className="entrance_form__item">
        <p className="entrance_form__item-title">E-mail</p>
        <input
          type="email"
          id="name"
          className="entrance_form__input"
          placeholder="впишите почту"
          required
        />
        <span className="entrance_form__error entrance_form__error_visible"></span>
      </div>

      <div className="entrance_form__item">
        <p className="entrance_form__item-title">Пароль</p>
        <input
          type="password"
          id="name"
          className="entrance_form__input"
          placeholder="впишите пароль"
          required
        />
        <span className="entrance_form__error entrance_form__error_visible">
          Что-то пошло не так...
        </span>
      </div>
    </PopupWithForm>
  );
}

export default Login;

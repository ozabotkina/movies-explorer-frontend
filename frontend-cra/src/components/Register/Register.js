import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register(props) {
  return (
    <PopupWithForm
      title="Добро пожаловать!"
      button="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linktext="Войти"
      link="/signin"
    >
      <div className="entrance-form__item">
        <p className="entrance-form__item-title">Имя</p>
        <input
          type="text"
          id="name"
          className="entrance-form__input"
          placeholder="впишите имя"
          required
        />
        <span className="entrance-form__error entrance-form__error_visible"></span>
      </div>

      <div className="entrance-form__item">
        <p className="entrance-form__item-title">E-mail</p>
        <input
          type="email"
          id="name"
          className="entrance-form__input"
          placeholder="впишите почту"
          required
        />
        <span className="entrance-form__error entrance-form__error_visible"></span>
      </div>

      <div className="entrance-form__item">
        <p className="entrance-form__item-title">Пароль</p>
        <input
          type="password"
          id="name"
          className="entrance-form__input"
          placeholder="впишите пароль"
          required
        />
        <span className="entrance-form__error entrance-form__error_visible">
          Что-то пошло не так...
        </span>
      </div>
    </PopupWithForm>
  );
}

export default Register;

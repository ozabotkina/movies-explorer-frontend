import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { register, authorize } from "../../utils/MainAPI";
import { withRouter } from "react-router-dom";

function Register(props) {
  const [name, setName] = React.useState("");
  const [nameValid, setNameValidity] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailValid, setEmailValidity] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordlValid, setPasswordValidity] = React.useState(false);
  const [formValid, setFormValidity] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [errMessage, setMessage] = React.useState(" Что-то пошло не так...");

  function handleEmailChange(e) {
    setEmail(e.target.value);
    let valid = checkVaildity(e.target);
    setEmailValidity(valid);
    setEmailError(!valid);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    let valid = checkVaildity(e.target);
    setPasswordValidity(valid);
  }

  function handleNameChange(e) {
    setName(e.target.value);
    let valid = checkVaildity(e.target);
    setNameValidity(valid);
    setNameError(!valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(email, password, name)
      .then((data) => {
        authorize(data.email, password).then((data) => {
          console.log(data);
          if (data.token) {
            console.log("2");
            setEmail("");
            setPassword("");
            setName("");
            props.handleLogin();
            props.history.push("/");
          } else {
            setError(true);
            setMessage(false);
            setMessage("Пользователь не авторизован");
          }
        });
      })

      .catch((err) => {
        setError(true);
        setEmail("");
        setPassword("");
        setName("");
        setMessage(`Ошибка ${err}`);
        setFormValidity(false);
      });
  }
  // написать и вынести отдельно

  function checkVaildity(target) {
    let valid = target.validity.valid;
    return valid;
  }

  function checkFormValidity() {
    if (
      (nameValid === true) &
      (passwordlValid === true) &
      (emailValid === true)
    ) {
      setFormValidity(true);
    } else {
      setFormValidity(false);
      setMessage("");
    }
  }

  React.useEffect(() => {
    checkFormValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameValid, passwordlValid, emailValid]);

  React.useEffect(() => {
    props.setFooter();
    props.setHeader();
  }, [props]);

  return (
    <PopupWithForm
      title="Добро пожаловать!"
      button="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linktext="Войти"
      link="/signin"
      formValid={formValid}
      onSubmit={formValid ? handleSubmit : undefined}
    >
      <div className="entrance-form__item">
        <p className="entrance-form__item-title">Имя</p>
        <input
          type="text"
          id="name"
          pattern="[A-Za-zА-Яа-яЁё\s\-]{2,30}"
          value={name}
          onChange={handleNameChange}
          valid={nameValid.toString()}
          className="entrance-form__input"
          placeholder="впишите имя"
          required
        />
        <span
          className={
            nameError
              ? "entrance-form__error entrance-form__error_visible"
              : "entrance-form__error"
          }
        >
          От 2 до 30 знаков, только буквы, пробел или дефис
        </span>
      </div>

      <div className="entrance-form__item">
        <p className="entrance-form__item-title">E-mail</p>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          valid={emailValid.toString()}
          className="entrance-form__input"
          placeholder="впишите почту"
          required
        />
        <span
          className={
            emailError
              ? "entrance-form__error entrance-form__error_visible"
              : "entrance-form__error"
          }
        >
          ***@***
        </span>
      </div>

      <div className="entrance-form__item">
        <p className="entrance-form__item-title">Пароль</p>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          minLength={2}
          maxLength={30}
          valid={passwordlValid.toString()}
          className="entrance-form__input"
          placeholder="впишите пароль"
          required
        />
        <span
          className={
            isError
              ? "entrance-form__error entrance-form__error_visible"
              : "entrance-form__error"
          }
        >
          {errMessage}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default withRouter(Register);

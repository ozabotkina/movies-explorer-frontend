import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { authorize } from "../../utils/MainAPI";
import { withRouter } from "react-router-dom";
import { regEmail } from "../../utils/regex";

function Login(props) {
  const [isError, setError] = React.useState(false);
  const [errMessage, setMessage] = React.useState(" Что-то пошло не так...");
  const [email, setEmail] = React.useState("");
  const [emailValid, setEmailValidity] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordValid, setPasswordValidity] = React.useState(false);
  const [formValid, setFormValidity] = React.useState(false);
  const [formDisabled, setDisabled] = React.useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    let valid = checkVaildity(e.target);
    setEmailValidity(valid);
    setEmailError(!valid);
    setError(false);
    checkFormValidity();
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordValidity(checkVaildity(e.target));
    setError(false);
    checkFormValidity();
  }

  function checkVaildity(target) {
    let valid = target.validity.valid;
    return valid;
  }

  function checkFormValidity() {
    if ((passwordValid === true) & (emailValid === true)) {
      setFormValidity(true);
    } else {
      setFormValidity(false);
    }
  }

  React.useEffect(() => {
    checkFormValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordValid, emailValid]);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    authorize(email, password)
      .then((data) => {
        if (data.token) {
          setEmail("");
          setPassword("");
          props.handleLogin();
          props.history.push("/movies");
        } else {
          // props.onFail();
          setError(true);
          setMessage("Пользователь не авторизован");
          setMessage(false);
        }
      })

      .catch((err) => {
        setError(true);
        // setEmail("");
        // setPassword("");
        setMessage(`Ошибка ${err}`);
        setFormValidity(false);
      })
      .finally(() => {
        setDisabled(false);
      });
  }

  React.useEffect(() => {
    props.setFooter();
    props.setHeader();
  }, [props]);

  return (
    <PopupWithForm
      title="Рады видеть!"
      button="Войти"
      text="Ещё не зарегистрированы?"
      linktext="Регистрация"
      link="/signup"
      formValid={formValid}
      isDisabled={formDisabled}
      onSubmit={formValid ? handleSubmit : undefined}
    >
      <div className="entrance-form__item">
        <p className="entrance-form__item-title">E-mail</p>
        <input
          type="email"
          id="email"
          value={email}
          pattern={regEmail}
          onChange={handleEmailChange}
          valid={emailValid.toString()}
          className="entrance-form__input"
          placeholder="впишите почту"
          required
          disabled={formDisabled}
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
          valid={passwordValid.toString()}
          className="entrance-form__input"
          placeholder="впишите пароль"
          required
          disabled={formDisabled}
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

export default withRouter(Login);

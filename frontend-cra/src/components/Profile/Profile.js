import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { updateUser } from "../../utils/MainAPI";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [nameValid, setNameValidity] = React.useState(true);

  const [email, setEmail] = React.useState(currentUser.email);
  const [emailValid, setEmailValidity] = React.useState(true);

  const [changesDone, setChanges] = React.useState(false);
  const [formValid, setFormValidity] = React.useState(false);

  const [showAlert, setAlert] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
    setNameValidity(checkVaildity(e.target));

    e.target.value === currentUser.name ? setChanges(false) : setChanges(true);

    setAlert(false);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailValidity(checkVaildity(e.target));

    e.target.value === currentUser.email ? setChanges(false) : setChanges(true);

    setAlert(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(name, email)
      .then((data) => {
        if (data) {
          props.onUpdateUser(data);
          setAlert("Данные успешно изменены");
          setChanges(false);
          console.log(formValid);
        } else {
          setAlert("Произошла ошибка");
        }
      })
      .catch((err) => {
        setAlert(`Произошла ошибка ${err}`);
      });
  }

  function checkVaildity(target) {
    let valid = target.validity.valid;
    return valid;
  }

  function checkFormValidity() {
    setFormValidity(
      (nameValid === true) & (emailValid === true) & (changesDone === true)
        ? true
        : false
    );
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    checkFormValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  React.useEffect(() => {
    props.setFooter();
    props.setHeader();
  }, [props]);

  React.useEffect(() => {
    checkFormValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changesDone]);

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__details" noValidate>
        <div className="profile__item">
          <p className="profile__name">Имя</p>
          <input
            className={
              nameValid
                ? "profile__value"
                : "profile__value  profile__value_error"
            }
            type="text"
            id="username"
            pattern="[A-Za-zА-Яа-яЁё\s\-]{2,30}"
            value={name}
            onChange={handleNameChange}
            valid={nameValid.toString()}
            required
          />
        </div>

        <div className="profile__underscore"></div>

        <div className="profile__item">
          <p className="profile__name">E-mail</p>
          <input
            className={
              emailValid
                ? "profile__value"
                : "profile__value  profile__value_error"
            }
            type="email"
            id="usermail"
            value={email}
            onChange={handleEmailChange}
            valid={emailValid.toString()}
            required
          />
        </div>
      </form>

      <h3 className="profile__alert">{showAlert}</h3>

      <nav className="profile__nav">
        <button
          className={
            formValid
              ? "profile__update link"
              : "profile__update profile__update_inactive"
          }
          disabled={formValid ? false : true}
          onClick={handleSubmit}
        >
          Редактировать
        </button>
        <button className="profile__exit link" onClick={props.onExit}>
          Выйти из аккаунта
        </button>
      </nav>
    </div>
  );
}
export default Profile;

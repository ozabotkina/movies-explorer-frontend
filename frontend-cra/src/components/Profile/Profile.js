import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { updateUser } from "../../utils/MainAPI";
import { regEmail, regName } from "../../utils/regex";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [nameValid, setNameValidity] = React.useState(true);

  const [email, setEmail] = React.useState(currentUser.email);
  const [emailValid, setEmailValidity] = React.useState(true);

  const [changesDone, setChanges] = React.useState(false);
  const [formValid, setFormValidity] = React.useState(false);

  const [showAlert, setAlert] = React.useState("");
  const [formDisabled, setDisabled] = React.useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
    setNameValidity(checkVaildity(e.target));

    e.target.value === currentUser.name ? setChanges(false) : setChanges(true);

    setAlert(false);
    checkFormValidity();
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailValidity(checkVaildity(e.target));

    e.target.value === currentUser.email ? setChanges(false) : setChanges(true);

    setAlert(false);
    checkFormValidity();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
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
        setFormValidity(false);
      })
      .finally(() => {
        setDisabled(false);
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
            pattern={regName}
            value={name}
            onChange={handleNameChange}
            valid={nameValid.toString()}
            required
            disabled={formDisabled}
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
            pattern={regEmail}
            onChange={handleEmailChange}
            valid={emailValid.toString()}
            required
            disabled={formDisabled}
          />
        </div>
      </form>

      <h3 className="profile__alert">{showAlert}</h3>

      <nav className="profile__nav">
        <button
          className={
            formValid
              ? formDisabled
                ? "profile__update profile__update_inactive"
                : "profile__update link"
              : "profile__update profile__update_inactive"
          }
          disabled={formValid ? (formDisabled ? true : false) : true}
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

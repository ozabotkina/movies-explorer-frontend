function Profile(props) {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {props.user.name}!</h2>
      <div className="profile__details">
        <div className="profile__item">
          <p className="profile__item__title">Имя</p>
          <p className="ptofile__item__value">{props.user.name}</p>
        </div>
        <div className="profile__underscore"></div>
        <div className="profile__item">
          <p className="profile__item__title">E-mail</p>
          <p className="ptofile__item__value">{props.user.email}</p>
        </div>
      </div>

      <nav className="profile__nav">
        <ul className="profile__update link">Редактировать</ul>
        <ul className="profile__exit link">Выйти из аккаунта</ul>
      </nav>
    </div>
  );
}
export default Profile;

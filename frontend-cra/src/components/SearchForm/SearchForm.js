import Switch from "../Switch/Switch";

function SearchForm(props) {
  return (
    <form className="search-form">
      <div className="search-form__wrap">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="search-form__button link">
          Найти
        </button>
      </div>

      <div className="search-form__switch">
        <Switch />
      </div>

      <div className="search-form__underline"></div>
    </form>
  );
}

export default SearchForm;

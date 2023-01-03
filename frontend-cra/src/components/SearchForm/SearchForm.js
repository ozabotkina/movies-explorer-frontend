import React from "react";
import Switch from "../Switch/Switch";

function SearchForm(props) {
  const [phrase, setPhrase] = React.useState("");
  const [shortOn, setShortStatus] = React.useState("");

  function handlePhraseChange(e) {
    setPhrase(e.target.value);
  }

  function handleSwitchClick(e) {
    if (phrase === "") {
      requestPhrase();
    } else {
      props.onSubmit(e, !shortOn, phrase);
    }
    setShortStatus(shortOn ? false : true);
  }

  function requestPhrase() {
    const input = document.querySelector(".search-form__input");
    input.placeholder = "Нужно ввести ключевое слово";
  }

  function handleSearch(e) {
    e.preventDefault();

    if (phrase === "") {
      requestPhrase();
    } else {
      props.onSubmit(e, shortOn, phrase);
    }
  }

  React.useEffect(() => {
    if (props.lastPhrase) {
      setPhrase(props.lastPhrase);
      setShortStatus(props.lastShort);
    }
  }, [props]);

  return (
    <form className="search-form" noValidate>
      <div className="search-form__wrap">
        <input
          value={phrase}
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          onChange={handlePhraseChange}
          required
        />

        <button
          type="submit"
          className="search-form__button link"
          onClick={handleSearch}
        >
          Найти
        </button>
      </div>

      <div className="search-form__switch">
        <Switch isOn={shortOn} handleClick={handleSwitchClick} />
      </div>

      <div className="search-form__underline"></div>
    </form>
  );
}

export default SearchForm;

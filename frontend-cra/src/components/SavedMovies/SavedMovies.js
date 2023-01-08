import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { MyMoviesContext } from "../../context/DataBasesContext";
import { filterMovies } from "../MoviesFilter";

function SavedMovies(props) {
  // const latestSearch = JSON.parse(localStorage.getItem("latestSearchSaved"));
  const [lastPhrase, setPhrase] = React.useState("");
  const [lastShort, setShortStatus] = React.useState("");

  const myMovies = React.useContext(MyMoviesContext);
  const [movieCards, setMovieCards] = React.useState(myMovies);

  function findMovies(movies, shortOn, phrase) {
    const foundMovies = filterMovies(movies, shortOn, phrase);
    setMovieCards(foundMovies);
    localStorage.setItem(
      "latestSearchSaved",
      JSON.stringify({ phrase, foundMovies, shortOn })
    );
    setPhrase(phrase);
    setShortStatus(shortOn);
  }

  function handleSearchInSaved(e, shortOn, phrase) {
    e.preventDefault();
    findMovies(myMovies, shortOn, phrase);
  }

  function handleDeleteClick(cardId) {
    props.onDelete(cardId);
    setMovieCards((state) => state.filter((c) => (c._id !== cardId ? c : "")));
  }

  React.useEffect(() => {
    props.setFooter();
    props.setHeader();
  }, [props]);

  return (
    <div className="movies">
      <SearchForm
        onSubmit={handleSearchInSaved}
        lastPhrase={lastPhrase}
        lastShort={lastShort}
      />

      <MoviesCardList
        cards={movieCards}
        onDelete={handleDeleteClick}
        inSavedMovies={true}
      />
      <div className="saved-movies__devider"></div>
    </div>
  );
}

export default SavedMovies;

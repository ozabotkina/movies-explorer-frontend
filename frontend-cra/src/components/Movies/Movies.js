import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import Preloader from "../Preloader/Preloader";
import React from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { filterMovies } from "../MoviesFilter";

function Movies(props) {
  const latestSearch = JSON.parse(localStorage.getItem("latestSearchAll"));
  const [lastPhrase, setPhrase] = React.useState(
    latestSearch ? latestSearch.phrase : ""
  );
  const [movieCards, setMovieCards] = React.useState(
    latestSearch ? latestSearch.foundMovies : ""
  );
  const [isSearching, setIsSearching] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [lastShort, setShortStatus] = React.useState(
    latestSearch ? latestSearch.shortOn : ""
  );
  const [clicksCounter, setCounter] = React.useState(1);
  const [isMore, setMore] = React.useState(false);

  function findMovies(movies, shortOn, phrase) {
    const foundMovies = filterMovies(movies, shortOn, phrase);
    localStorage.setItem(
      "latestSearchAll",
      JSON.stringify({ phrase, foundMovies, shortOn })
    );
    setPhrase(phrase);
    setShortStatus(shortOn);
    setMovieCards(foundMovies);
  }

  function handleSearchSubmit(e, shortOn, phrase) {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));

    e.preventDefault();
    setCounter(1);
    setError(false);

    if (!storedMovies) {
      setIsSearching(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem("movies", JSON.stringify(movies));
          return movies;
        })
        .then((movies) => {
          findMovies(movies, shortOn, phrase);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => setIsSearching(false));
    } else {
      findMovies(storedMovies, shortOn, phrase);
    }
  }

  function handleMoreClick(e) {
    setCounter(clicksCounter + 1);
  }
  function handleLongList(status) {
    setMore(status);
  }

  React.useEffect(() => {
    props.setFooter();
    props.setHeader();
  }, [props]);

  return (
    <div className="movies">
      <SearchForm
        onSubmit={handleSearchSubmit}
        lastPhrase={lastPhrase}
        lastShort={lastShort}
      />
      {isSearching ? (
        <Preloader />
      ) : (
        <div className="movies__result">
          <MoviesCardList
            cards={movieCards}
            isError={isError}
            clicks={clicksCounter}
            isLimited={true}
            onLike={props.onLike}
            onDelete={props.onDelete}
            needMore={handleLongList}
          />
          {isMore ? <More onClick={handleMoreClick} /> : ""}
        </div>
      )}
    </div>
  );
}

export default Movies;

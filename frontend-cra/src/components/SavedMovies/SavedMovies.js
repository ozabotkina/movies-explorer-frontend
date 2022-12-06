import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movieCards } from "../../utils/movieCards";

function SavedMovies(props) {
  const savedCards = movieCards.filter((item) => item.saved === true);
  console.log(savedCards);

  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList cards={savedCards} inSavedMovies={true} />
      <div className="saved-movies__devider"></div>
    </div>
  );
}

export default SavedMovies;

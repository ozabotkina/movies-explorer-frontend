import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import { movieCards } from "../../utils/movieCards";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  return (
    <div className="movies">
      <SearchForm />
      {props.isSearching ? (
        <Preloader />
      ) : (
        <div className="movies__result">
          <MoviesCardList cards={movieCards} />
          <More />
        </div>
      )}
    </div>
  );
}

export default Movies;

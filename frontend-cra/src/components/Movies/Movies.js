import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import { movieCards } from "../../utils/movieCards";

function Movies(props) {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList cards={movieCards} />
      <More />
    </div>
  );
}

export default Movies;

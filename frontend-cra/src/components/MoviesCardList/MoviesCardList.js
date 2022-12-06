import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <div className="card-list">
      {props.cards.map((card, i) => (
        <MoviesCard
          card={card}
          key={card._id}
          inSavedMovies={props.inSavedMovies}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;

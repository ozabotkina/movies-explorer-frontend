import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  console.log(props.cards);
  return (
    <div className="card-list">
      {props.cards.length === 0 ? (
        <div className="card-list__empty">Ничего не найдено</div>
      ) : (
        props.cards.map((card, i) => (
          <MoviesCard
            card={card}
            key={card._id}
            inSavedMovies={props.inSavedMovies}
          />
        ))
      )}
    </div>
  );
}

export default MoviesCardList;

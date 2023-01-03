import React from "react";
import SaveButton from "../SaveButton/SaveButton";
import UnsaveButton from "../UnsaveButton/UnsaveButton";

function MoviesCard(props) {
  const isSaved = props.card.saved;
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div
      className={isMouseOver ? "movie-card movie-card_hover" : "movie-card"}
      id={props.card._id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className = "movie-card__button">
      {props.inSavedMovies ? (
        <UnsaveButton isMouseOver={isMouseOver} />
      ) : (
        <SaveButton isSaved={isSaved} isMouseOver={isMouseOver} />
      )}
      </div>
      <img
        className="movie-card__image"
        src={props.card.trailer_pic}
        alt={props.card.name}
      />

      <div className="movie-card__words">
        <h2 className="movie-card__title">{props.card.name}</h2>
        <div className="movie-card__duration">{props.card.duration}</div>
      </div>
    </div>
  );
}

export default MoviesCard;

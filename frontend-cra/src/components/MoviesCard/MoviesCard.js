import React from "react";
import SaveButton from "../SaveButton/SaveButton";
import UnsaveButton from "../UnsaveButton/UnsaveButton";
import { MOVIE_URL } from "../../utils/constants";
import { MyMoviesContext } from "../../context/DataBasesContext";

function MoviesCard(props) {
  const myMovies = React.useContext(MyMoviesContext);
  const myCard = Array.from(myMovies).find(
    (item) => item.movieId === props.card.id
  );

  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isSaved, setSaved] = React.useState("");

  function checkSaved() {
    if (myCard) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }

  React.useEffect(() => {
    checkSaved();
  }, [myMovies]);

  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleImgClick(e) {
    window.open(props.card.trailerLink);
    console.log(e.target);
  }

  return (
    <div
      className={
        props.isVisible
          ? isMouseOver
            ? "movie-card movie-card_hover"
            : "movie-card"
          : "movie-card_hidden"
      }
      id={props.card.id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="movie-card__button">
        {props.inSavedMovies ? (
          <UnsaveButton
            isMouseOver={isMouseOver}
            card={props.card}
            toDelete={props.onDelete}
          />
        ) : (
          <SaveButton
            isSaved={isSaved}
            isMouseOver={isMouseOver}
            card={props.card}
            myCard={myCard}
            toSave={props.onLike}
            toDelete={props.onDelete}
          />
        )}
      </div>

      <img
        className="movie-card__image"
        src={
          props.inSavedMovies
            ? props.card.image
            : MOVIE_URL + props.card.image.url
        }
        alt={props.card.nameRU}
        onClick={handleImgClick}
      />

      <div className="movie-card__words">
        <h2 className="movie-card__title">{props.card.nameRU}</h2>

        <div className="movie-card__duration">
          {Math.trunc(props.card.duration / 60)}ч {props.card.duration % 60}м
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;

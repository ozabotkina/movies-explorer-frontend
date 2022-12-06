import React from "react";
import { useState } from "react";

function MoviesCard (props) {

    const [isSaved, setIsSaved] = React.useState(props.card.saved);
    const [isMouseOver, setIsMouseOver] = React.useState(false);

    function handleMouseOver() {
      setIsMouseOver(true);
    }
    function handleMouseOut() {
        setIsMouseOver(false);
      }
      

    return (
        
  <div 
    className = {isMouseOver ? "movie-card movie-card_hover" : "movie-card"} id={props.card._id}
    onMouseOver={handleMouseOver} 
    onMouseOut={handleMouseOut}>

        <div className={isSaved ? "saved saved_active" : "saved "}></div>
        <button
            type="button"
            className={isSaved ? "save-button" : isMouseOver ? "save-button save-button_active" : "save-button"}
>
            Сохранить
        </button>
        <img
            className="movie-card__image"
            src={props.card.trailer_pic}
            alt={props.card.name} />
        
        <div className="movie-card__words">
            <h2 className="movie-card__title">
                {props.card.name}
            </h2>
            <div className="movie-card__duration">{props.card.duration}</div>
        </div>
   </div> 
    )}
    export default MoviesCard;
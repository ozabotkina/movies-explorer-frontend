import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import {
  DESKTOP_PARAMS,
  IPAD_PARAMS,
  MOBILE_PARAMS,
} from "../../utils/constants";

function MoviesCardList(props) {
  const [width, setWidth] = React.useState([window.innerWidth]);
  const [maxCards, setMaxCards] = React.useState("");
  const [maxRow, setMaxRow] = React.useState("");
  const [endPoint, setEnd] = React.useState("");
  const [startPoint, setStart] = React.useState("");
  const [isLong, setLong] = React.useState(false);

  // формат сетки в зависимости от ширины экрана

  const handleResize = () => {
    setTimeout(setWidth([window.innerWidth]), 500);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, [props.cards]);

  React.useEffect(() => {
    props.isLimited
      ? setMaxCards(
          width > DESKTOP_PARAMS.minwidth
            ? DESKTOP_PARAMS.maxCards
            : width > IPAD_PARAMS.minwidth
            ? IPAD_PARAMS.maxCards
            : MOBILE_PARAMS.maxCards
        )
      : setMaxCards(props.cards.length);
    setMaxRow(
      width > DESKTOP_PARAMS.minwidth
        ? DESKTOP_PARAMS.maxRow
        : width > IPAD_PARAMS.minwidth
        ? IPAD_PARAMS.maxRow
        : MOBILE_PARAMS.maxRow
    );
  }, [width, props.isLimited, props.cards.length]);

  React.useEffect(() => {
    setEnd(
      props.isLimited ? props.clicks * maxRow - 1 : props.cards.length - 1
    );
    setStart(
      props.isLimited
        ? props.clicks * maxRow >= maxCards
          ? props.clicks * maxRow - maxCards
          : 0
        : 0
    );

    setLong(
      props.isLimited
        ? props.cards.length > props.clicks * maxRow
          ? true
          : 0
        : 0
    );
  }, [props.clicks, maxCards, maxRow, props.cards.length, props.isLimited]);

  React.useEffect(() => {
    if (props.isLimited) {
      props.needMore(isLong);
    }
  }, [isLong, props]);

  // React.useEffect(()=>{console.log(maxCards, startPoint, endPoint, props.cards.length)},[maxCards, startPoint, endPoint, props.cards.length])

  return (
    <div className="card-list">
      {props.isError ? (
        <div className="card-list__empty">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </div>
      ) : props.cards.length === 0 ? (
        <div className="card-list__empty">Ничего не найдено</div>
      ) : (
        props.cards.map((card, i) => (
          <MoviesCard
            card={card}
            key={props.inSavedMovies ? card._id : card.id}
            isVisible={(startPoint <= i) & (i <= endPoint)}
            onLike={props.onLike}
            onDelete={props.onDelete}
            inSavedMovies={props.inSavedMovies}
          />
        ))
      )}
    </div>
  );
}

export default MoviesCardList;


import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList (props) {
    return (

<div className="card-list">  

{props.cards.map((card, i) => (
          <MoviesCard
            card={card}
            key={card._id}
            // onCardClick={props.onCardClick}
            // onCardLike={props.onCardLike}
            // onCardDelete={props.onCardDelete}
          />
        ))}
</div>  
    ) ;
    }
    
    export default MoviesCardList;
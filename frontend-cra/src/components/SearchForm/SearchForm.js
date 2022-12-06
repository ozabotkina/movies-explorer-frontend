function SearchForm(props) {
    return (
        <form className="search-form">
        <div className="search-form__wrap">
         <input type="text" className="search-form__input" placeholder="Фильм"/>
         <button type="submit" className="search-form__button">Найти</button>
        </div> 
    
 
        <div className="switch">
         <div className="switch-area">
           <div className="switch__button"></div>
         </div> 
         <div className="switch-label">Короткометражки</div>
 
        </div>
        <div className="search-form__underline"></div>
     </form>
 
        ) ;
    }
    
    export default SearchForm;
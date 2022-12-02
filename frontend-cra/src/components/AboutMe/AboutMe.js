import photoPath from "../../images/IMG_2110.jpg"

function AboutMe(props) {
    return (
        <section className="about-me">
         <h2 className="about-me__title">Студент</h2>
         <div className="about-me__intro">
             <div className="about-me__texts">
                 <h3 className="about-me__name">Ольга</h3>
                 <p className="about-me__profession">Фронтенд-разработчик</p>
                 <p className="about-me__about">Моя карьера до сих пор не была связана с веб-разработкой. Я начала учиться в надежде самостоятельно разработать сайт с фотографиями из моих путешествий, совершенно не ожидая, что профессия мне настолько понравится. По окончании курса Яндекс Практикума я надеюсь стать частью профессиональной команды разработчиков.  </p>
                 <p className="about-me__link">Github</p>
            </div>
            <img className="about-me__photo" src={photoPath} alt= "красивая и умная женщина"></img>
        </div>
        <nav className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__item">
                <p className="portfolio__text">Статичный сайт</p>
                <p className="portfolio__icon">↗</p>
            </ul>
            <ul className="portfolio__item">
                <p className="portfolio__text">Адаптивный сайт</p>
                <p className="portfolio__icon">↗</p>
            </ul>
            <ul className="portfolio__item portfolio__item_last ">
                <p className="portfolio__text">Одностраничное приложение</p>
                <p className="portfolio__icon">↗</p>
            </ul>
        </nav>
        </section>
    ) ;
    }
    
    export default AboutMe;
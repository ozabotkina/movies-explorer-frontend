import photoPath from "../../images/IMG_2110.jpg";
import { GitHub } from "../../utils/portfolioLinks"

function AboutMe(props) {
  return (
    <section className="about-me" id="AboutMe">
      <h2  className="about-me__title">Студент</h2>
      <div className="about-me__intro">
        <div className="about-me__texts">
          <h3 className="about-me__name">Ольга</h3>
          <p className="about-me__profession">Фронтенд-разработчик</p>
          <p className="about-me__about">
            Моя карьера до сих пор не была связана с веб-разработкой. Я начала
            учиться в надежде самостоятельно разработать сайт с фотографиями из
            моих путешествий, совершенно не ожидая, что профессия мне настолько
            понравится. По окончании курса Яндекс Практикума я надеюсь стать
            частью профессиональной команды разработчиков.{" "}
          </p>
          <a 
            className="about-me__link link"
            href = { GitHub.link }
            target="_blank" rel="noreferrer">
              Github
          </a>
        </div>
        <img
          className="about-me__photo"
          src={photoPath}
          alt="красивая и умная женщина"
        ></img>
      </div>
    </section>
  );
}

export default AboutMe;

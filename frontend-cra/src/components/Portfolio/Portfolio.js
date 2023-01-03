import { StaticSite, Adaptive, FullSite } from "../../utils/portfolioLinks";

function Portfolio(props) {
  return (
    <nav className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <a
        className="portfolio__item link"
        href={StaticSite.link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__text">Статичный сайт</p>
        <p className="portfolio__icon">↗</p>
      </a>
      <a
        className="portfolio__item link"
        href={Adaptive.link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__text">Адаптивный сайт</p>
        <p className="portfolio__icon">↗</p>
      </a>
      <a
        className="portfolio__item portfolio__item_last link"
        href={FullSite.link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__text">Одностраничное приложение</p>
        <p className="portfolio__icon">↗</p>
      </a>
    </nav>
  );
}

export default Portfolio;

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__basement">
        <div className="footer__year">© 2022</div>
        <nav className="footer__links">
          <a
            className="footer__link link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

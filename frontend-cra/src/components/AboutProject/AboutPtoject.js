function AboutProject(props) {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <div className="about-project__info-piece">
          <h3 className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-essense">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info-piece">
          <h3 className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-essense">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__table">
        <div className="about-project__table__time  about-project__table__time_1">
          1 неделя
        </div>
        <div
          className="about-project__table__time
              about-project__table__time_4"
        >
          4 недели
        </div>

        <div className="about-project__table__comment">Back-end</div>
        <div className="about-project__table__comment">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;

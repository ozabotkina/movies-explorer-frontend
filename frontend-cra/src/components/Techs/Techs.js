function Techs(props) {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__number">7 технологий</h3>
      <p className="techs__comment">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__icons">
        <div className="techs__icon">HTML</div>
        <div className="techs__icon">CSS</div>
        <div className="techs__icon">JS</div>
        <div className="techs__icon">React</div>
        <div className="techs__icon">Git</div>
        <div className="techs__icon">Express.js</div>
        <div className="techs__icon">mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;

import MainPageTitle from "../MainPageTitle/MainPageTitle";

function Techs() {
  return (
    <section className="techs">
      <MainPageTitle text="Технологии" isPlaceTechs={true} />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__list-cell">HTML</li>
        <li className="techs__list-cell">CSS</li>
        <li className="techs__list-cell">JS</li>
        <li className="techs__list-cell">React</li>
        <li className="techs__list-cell">Git</li>
        <li className="techs__list-cell">Express.js</li>
        <li className="techs__list-cell">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
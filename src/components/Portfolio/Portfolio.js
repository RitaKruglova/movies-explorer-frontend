function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__links">
          <li className="portfolio__list-item">
            <a className="portfolio__link" target="blank" href="https://github.com/RitaKruglova/how-to-learn">
              Статичный сайт
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__link" target="blank" href="https://ritakruglova.github.io/russian-travel/">
              Адаптивный сайт
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__link" target="blank" href="https://mesto.rita-kruglova.nomoredomains.xyz/">
              Одностраничное приложение
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;
function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <nav className="portfolio__links">
        <a className="portfolio__link" href="https://github.com/RitaKruglova/how-to-learn">
          Статичный сайт
          <span className="portfolio__arrow">↗</span>
        </a>
        <a className="portfolio__link" href="https://ritakruglova.github.io/russian-travel/">
          Адаптивный сайт
          <span className="portfolio__arrow">↗</span>
        </a>
        <a className="portfolio__link" href="https://mesto.rita-kruglova.nomoredomains.xyz/">
          Одностраничное приложение
          <span className="portfolio__arrow">↗</span>
        </a>
      </nav>
    </section>
  )
}

export default Portfolio;
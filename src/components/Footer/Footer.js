function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title-container">
        <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
      </div>
      <div className="footer__info">
        <p className="footer__date">© 2023</p>
        <ul className="footer__references-container">
          <li className="footer__list-item">
            <a className="footer__platform" target="blank" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__platform" target="blank" href="https://github.com/">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
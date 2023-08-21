import NavTab from '../NavTab/NavTab';
import webImage from '../../images/web.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <NavTab />
      </div>
      <img
        src={webImage}
        alt="Глобус, сложенный из слов 'web'"
        className="promo__image"
      />
    </section>
  )
}

export default Promo;
import NavTab from '../App/NavTab/NavTab';
import webImage from '../../images/web.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
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
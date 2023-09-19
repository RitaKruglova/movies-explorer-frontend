import NavTab from '../NavTab/NavTab';
import { useContext } from 'react';
import GlobeImg from '../GlobeImg/GlobeImg';
import { WidthContext } from "../../contexts/WidthContext";

function Promo() {
  const { width } = useContext(WidthContext);

  return (
    
    <section className="promo">
      <div className="promo__container">
        {width <= 768 && <GlobeImg />}
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный&nbsp;проект студента факультета Веб&#8209;разработки.
            </h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <NavTab />
        </div>
        {width > 768 && <GlobeImg />}
      </div>
    </section>
  )
}

export default Promo;
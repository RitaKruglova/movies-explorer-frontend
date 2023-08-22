import NavTab from '../NavTab/NavTab';
import { useEffect, useState } from 'react';
import GlobeImg from '../GlobeImg/GlobeImg';

function Promo() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <section className="promo">
      {width <= 768 && <GlobeImg />}
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный&nbsp;проект студента факультета Веб&#8209;разработки.
          </h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <NavTab />
      </div>
      {width > 768 && <GlobeImg />}
    </section>
  )
}

export default Promo;
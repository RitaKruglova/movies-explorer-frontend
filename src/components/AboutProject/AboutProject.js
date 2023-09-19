import MainPageTitle from "../MainPageTitle/MainPageTitle";
import { WidthContext } from "../../contexts/WidthContext";
import { useContext } from "react";

function AboutProject() {
  const { width } = useContext(WidthContext);

  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <MainPageTitle text="О проекте" />
        <ul className="about-project__description">
          {width <= 500 ? 
            <>
              <li className="about-project__description-cell">Дипломный проект включал 5 этапов</li>
              <li className="about-project__description-cell about-project__description-cell_place_bottom">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
              <li className="about-project__description-cell">На выполнение диплома ушло 5 недель</li>
              <li className="about-project__description-cell about-project__description-cell_place_bottom">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
            </>
            :
            <>
              <li
                className="about-project__description-cell">Дипломный проект включал 5 этапов</li>
              <li className="about-project__description-cell">На выполнение диплома ушло 5 недель</li>
              <li className="about-project__description-cell about-project__description-cell_place_bottom">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
              <li className="about-project__description-cell about-project__description-cell_place_bottom">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
            </>
          }
        </ul>
        <ul className="about-project__table">
          <li className="about-project__table-cell">1 неделя</li>
          <li className="about-project__table-cell">4 недели</li>
          <li className="about-project__table-cell about-project__table-cell_place_bottom">Back-end</li>
          <li className="about-project__table-cell about-project__table-cell_place_bottom">Front-end</li>
        </ul>
      </div>
    </section>
  )
}

export default AboutProject;
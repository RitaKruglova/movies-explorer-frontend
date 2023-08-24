import MainPageTitle from '../MainPageTitle/MainPageTitle';
import studentPhoto from '../../images/student-photo.png';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <MainPageTitle text="Студент" />
        <div className="about-me__info">
          <div className="about-me__description">
            <h3 className="about-me__name">Рита</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 28 лет</p>
            <p className="about-me__story">Я живу в Москве. Я закончила РГАУ-МСХА им. Тимирязева, технологический факультет. Пять лет работала по профессии, решила ее сменить и поступила в Яндекс Практикум. Люблю азиатскую культуру, а еще я рисую, программирую и хожу в спортзал.</p>
            <a href="https://github.com/RitaKruglova" className="about-me__link">Github</a>
          </div>
          <img
            src={studentPhoto}
            className="about-me__image"
            alt="Фотография Риты"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
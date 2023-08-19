import MainPageTitle from '../MainPageTitle/MainPageTitle';
import studentPhoto from '../../images/student-photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <MainPageTitle text="Студент" />
      <div className="about-me__info">
        <h3 className="about-me__name">Рита</h3>
        <p className="about-me__profession">Фронтенд-разработчик, 28 лет</p>
        <p className="about-me__description">Я живу в Москве. Я закончила РГАУ-МСХА им. Тимирязева, технологический факультет. Пять лет работала по профессии, решила ее сменить и поступила в Яндекс Практикум. Люблю азиатскую культуру, а еще я рисую, программирую и хожу в спортзал</p>
        <a href="https://github.com/RitaKruglova" className="about-me__link">Github</a>
      </div>
      <img
        src={studentPhoto}
        className="about-me__image"
        alt="Фотография Риты"
      />
    </section>
  )
}

export default AboutMe;
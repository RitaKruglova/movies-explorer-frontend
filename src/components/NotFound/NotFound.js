import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1, { replace: true });
  }

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button
          className="not-found__button"
          aria-label="Назад"
          onClick={goBack}
        >
          Назад
        </button>
      </div>
    </section>
  )
}

export default NotFound;
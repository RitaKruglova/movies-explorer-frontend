function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
        />
        <button
          className="search-form__button"
          type="submit"
        >
          Найти
        </button>
      </div>
      <div className="search-form__switch-container">
        <input
          className="search-form__checkbox"
          type="checkbox"
          id="short-films"
        />
        <label
          className="search-form__checkbox-label"
          for="short-films"
        >
          Короткометражки
        </label>
      </div>
    </form>
  );
}

export default SearchForm;
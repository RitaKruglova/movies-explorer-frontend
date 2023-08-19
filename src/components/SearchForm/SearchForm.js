function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
          />
          <button
            className="search__button"
            type="submit"
          >
            Найти
          </button>
        </div>
        <div className="search__switch-container">
          <input
            className="search__checkbox"
            type="checkbox"
            id="short-films"
          />
          <label
            className="search__checkbox-label"
            for="short-films"
          >
            Короткометражки
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
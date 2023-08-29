import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

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
            aria-label="Найти фильмы"
          >
            Найти
          </button>
        </div>
        <FilterCheckbox />
      </form>
  );
}

export default SearchForm;
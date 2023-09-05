import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({isDropdownMenuOpen}) {
  return (
      <form className="search-form">
        <div className="search-form__container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Найти фильмы"
          >
            Найти
          </button>
        </div>
        <span className="search-form__error"></span>
        <FilterCheckbox isDropdownMenuOpen={isDropdownMenuOpen} />
      </form>
  );
}

export default SearchForm;
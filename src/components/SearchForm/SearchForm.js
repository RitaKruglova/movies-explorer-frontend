import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

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
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
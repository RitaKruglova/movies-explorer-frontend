import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { IsSubmittingContext } from '../../contexts/IsSubmittingContext';
import { useContext } from "react";

function SearchForm({isDropdownMenuOpen, searchInputValue, handleChange, handleSubmit, errorText, handleCheckboxChange, isShort}) {
  const { isSubmitting } = useContext(IsSubmittingContext);

  return (
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
            onChange={handleChange}
            value={searchInputValue}
            disabled={!isSubmitting}
          />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Найти фильмы"
            disabled={!isSubmitting}
          >
            Найти
          </button>
        </div>
        <span className="search-form__error">{errorText}</span>
        <FilterCheckbox
          isDropdownMenuOpen={isDropdownMenuOpen}
          handleCheckboxChange={handleCheckboxChange}
          isShort={isShort}
        />
      </form>
  );
}

export default SearchForm;
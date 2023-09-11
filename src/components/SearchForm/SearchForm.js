import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({isDropdownMenuOpen, searchInputValue, handleChange, handleSubmit, errorText, handleCheckboxChange, isShort}) {
  

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
          />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Найти фильмы"
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
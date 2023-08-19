function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="short-films"
      />
      <label
        className="filter-checkbox__label"
        for="short-films"
      >
        Короткометражки
      </label>
    </div>
  )
}

export default FilterCheckbox;
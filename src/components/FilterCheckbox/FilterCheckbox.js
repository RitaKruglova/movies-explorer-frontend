function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
          <input
              className="filter-checkbox__input"
              type="checkbox"
              id="short-films"
          />
          <div className="filter-checkbox__visible-input">
            <span className="filter-checkbox__round" />
          </div>
          Короткометражки
      </label>
    </div>
  )
}

export default FilterCheckbox;
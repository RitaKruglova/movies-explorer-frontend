function FilterCheckbox({isDropdownMenuOpen, handleCheckboxChange, isShort}) {
  return (
    <div className={`filter-checkbox${isDropdownMenuOpen ? " filter-checkbox_invisible" : ""}`}>
      <label className="filter-checkbox__label">
          <input
              className="filter-checkbox__input"
              type="checkbox"
              id="short-films"
              onChange={handleCheckboxChange}
              checked={isShort}
              // disabled
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
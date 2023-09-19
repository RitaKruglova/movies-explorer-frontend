import { useContext } from 'react';
import { IsSubmittingContext } from '../../contexts/IsSubmittingContext';

function FilterCheckbox({isDropdownMenuOpen, handleCheckboxChange, isShort}) {
  const { isSubmitting } = useContext(IsSubmittingContext);
  
  return (
    <div className={`filter-checkbox${isDropdownMenuOpen ? " filter-checkbox_invisible" : ""}`}>
      <label className="filter-checkbox__label">
          <input
              className="filter-checkbox__input"
              type="checkbox"
              id="short-films"
              onChange={handleCheckboxChange}
              checked={isShort}
              disabled={!isSubmitting}
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
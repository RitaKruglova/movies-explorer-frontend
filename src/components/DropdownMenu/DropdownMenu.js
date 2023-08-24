import Navigation from "../Navigation/Navigation";

function DropdownMenu({isOpen}) {

  return (
    <div className={`dropdown-menu${isOpen ? " dropdown-menu_opened" : ""}`}>
      <Navigation isDropdownMenuPlace={true} isMenuOpen={isOpen} />
    </div>
  )
}

export default DropdownMenu;
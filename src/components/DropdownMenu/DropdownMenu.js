import Navigation from "../Navigation/Navigation";
import AccountButton from "../AccountButton/AccountButton";

function DropdownMenu() {

  return (
    <div className="dropdown-menu">
      <Navigation isDropdownMenuPlace={true} />
      <AccountButton />
    </div>
  )
}

export default DropdownMenu;
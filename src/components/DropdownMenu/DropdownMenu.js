import Navigation from "../Navigation/Navigation";
import AccountButton from "../AccountButton/AccountButton";

function DropdownMenu() {

  return (
    <>
      <Navigation needMainLink={true} />
      <AccountButton />
    </>
  )
}

export default DropdownMenu;
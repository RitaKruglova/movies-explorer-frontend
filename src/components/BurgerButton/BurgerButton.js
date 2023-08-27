import { useLocation } from "react-router-dom";

function BurgerButton({isOpen, onClick}) {
  const location = useLocation();

  return (
    <div className={`burger-button${isOpen ?  " burger-button_opened" : ""}${location.pathname !== "/" && !isOpen ? " burger-button_color_black" : ""}`} onClick={onClick}></div>
  )
}

export default BurgerButton;
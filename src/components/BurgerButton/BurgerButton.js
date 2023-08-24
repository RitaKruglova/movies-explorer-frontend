import openedMenu from '../../images/menu-opened.svg';
import closedMenu from '../../images/menu-closed.svg';

function BurgerButton({isOpen, onClick}) {

  return (
    <div className={`burger-button${isOpen ?  " burger-button_opened" : ""}`} onClick={onClick}>
      <div className="burger-button__icon"></div>
    </div>
  )
}

export default BurgerButton;
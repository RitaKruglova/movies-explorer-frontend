function MainPageTitle({text, isPlaceTechs}) {
  return (
    <div className={`main-page-title${isPlaceTechs ? " main-page-title_place_techs" : ""}`}>
      <h2 className="main-page-title__text">{text}</h2>
    </div>
  )
}

export default MainPageTitle;
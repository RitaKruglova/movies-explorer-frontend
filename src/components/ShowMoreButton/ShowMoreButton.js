function ShowMoreButton({ handleShowMoreClick }) {
  return (
    <button
      className="show-more-button"
      type="button"
      aria-label="Показать больше фильмов"
      onClick={handleShowMoreClick}
    >
      Ещё
    </button>
  )
}

export default ShowMoreButton;
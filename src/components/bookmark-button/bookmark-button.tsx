import { BookmarkButtonDisplayMode, BookmarkButtonSettings } from '../../const';

type BookmarkButtonProps = {
  isFavorite: boolean;
  displayMode: BookmarkButtonDisplayMode;
}

function BookmarkButton({displayMode, isFavorite}: BookmarkButtonProps): JSX.Element {
  const {classPrefix, imgHeight, imgWidth} = BookmarkButtonSettings[displayMode];
  return (
    <button className={`${classPrefix}__bookmark-button button ${isFavorite && `${classPrefix}__bookmark-button--active button`}`} type="button">
      <svg className={`${classPrefix}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;

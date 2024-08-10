import { BookmarkButtonDisplayMode, BookmarkButtonSettings } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postFavorite } from '../../store/api-actions';

type BookmarkButtonProps = {
  isFavorite: boolean;
  displayMode: BookmarkButtonDisplayMode;
  offerId: string;
}

function BookmarkButton({displayMode, isFavorite, offerId}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {classPrefix, imgHeight, imgWidth} = BookmarkButtonSettings[displayMode];
  return (
    <button
      className={`${classPrefix}__bookmark-button button ${isFavorite && `${classPrefix}__bookmark-button--active button`}`}
      type="button"
      onClick={() => {
        dispatch(postFavorite({offerId, isFavorite: !isFavorite}));
      }}
    >
      <svg className={`${classPrefix}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;

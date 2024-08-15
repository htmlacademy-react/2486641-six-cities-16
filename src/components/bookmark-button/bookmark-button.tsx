import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, BookmarkButtonDisplayMode, BookmarkButtonSettings } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteAction } from '../../store/favorites/thunks';
import { getAuthorizationStatus } from '../../store/user/selectors';

type BookmarkButtonProps = {
  isFavorite: boolean;
  displayMode: BookmarkButtonDisplayMode;
  offerId: string;
}

function BookmarkButton({displayMode, isFavorite, offerId}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {classPrefix, imgHeight, imgWidth} = BookmarkButtonSettings[displayMode];
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  return (
    <button
      className={`${classPrefix}__bookmark-button button ${isFavorite && `${classPrefix}__bookmark-button--active button`}`}
      type="button"
      onClick={() => {
        if (authStatus !== AuthorizationStatus.Auth) {
          navigate(AppRoute.Login);
        } else {
          dispatch(postFavoriteAction({offerId, isFavorite: !isFavorite}));
        }
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

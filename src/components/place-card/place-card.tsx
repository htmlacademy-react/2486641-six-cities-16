import { Link } from 'react-router-dom';
import { Offer } from '../../types';
import PremiumMark from './premium-mark';
import { AppRoute, CardDisplayMode, CardSettings } from '../../const';

type PlaceCardProps = {
  offer: Offer;
  handleMouseOver: (cardId: Offer['id'] | null) => void;
  displayMode: CardDisplayMode;
}

function PlaceCard({offer, handleMouseOver, displayMode}: PlaceCardProps): JSX.Element {
  const {cardClass, imgDivClass, imgWidth, imgHeight, infoClass} = CardSettings[displayMode];
  return(
    <article
      className={cardClass}
      onMouseEnter={() => handleMouseOver(offer.id)}
      onMouseLeave={() => handleMouseOver(null)}
    >
      {offer.isPremium && <PremiumMark />}
      <div className={imgDivClass}>
        <Link to={AppRoute.Offer.replace(':id', offer.id)}>
          <img className="place-card__image" src={offer.previewImage} width={imgWidth} height={imgHeight} alt="Place image"></img>
        </Link>
      </div>
      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite && 'place-card__bookmark-button--active button'}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

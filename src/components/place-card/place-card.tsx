import { Link } from 'react-router-dom';
import { Offer } from '../../types';
import PremiumMark from '../premium-mark/premium-mark';
import { AppRoute, BookmarkButtonDisplayMode, CardDisplayMode, CardSettings } from '../../const';
import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  offer: Offer;
  onMouseOver?: (card?: Offer) => void;
  displayMode: CardDisplayMode;
}

function PlaceCard({offer, onMouseOver, displayMode}: PlaceCardProps): JSX.Element {
  const {cardClass, imgDivClass, imgWidth, imgHeight, infoClass} = CardSettings[displayMode];
  const linkToOffer = AppRoute.Offer.replace(':id', offer.id);
  return(
    <article
      className={cardClass}
      onMouseEnter={onMouseOver ? () => onMouseOver(offer) : undefined}
      onMouseLeave={onMouseOver ? () => onMouseOver() : undefined}
    >
      {offer.isPremium && <PremiumMark />}
      <div className={imgDivClass}>
        <Link to={linkToOffer}>
          <img className="place-card__image" src={offer.previewImage} width={imgWidth} height={imgHeight} alt="Place image"></img>
        </Link>
      </div>
      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton displayMode={BookmarkButtonDisplayMode.placeCard} isFavorite={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkToOffer}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

import { useParams } from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form.tsx';
import BookmarkButton from '../../components/bookmark-button/bookmark-button.tsx';
import { AuthorizationStatus, BookmarkButtonDisplayMode, CardDisplayMode, OFFER_IMAGE_COUNT } from '../../const.ts';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import PlaceList from '../../components/place-list/place-list.tsx';
import Map from '../../components/map/map.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import NotFoundScreen from '../not-found-screen/not-found-screen.tsx';
import { fetchNearOffersAction, getOfferAction } from '../../store/offers/thunks.ts';
import { useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user/selectors.ts';
import { getNearOffers, getOffersInfo } from '../../store/offers/selectors.ts';
import { fetchComments } from '../../store/comments/thunks.ts';
import { getComments } from '../../store/comments/selectors.ts';
import { calcStarsWidthPercent, ucFirst } from '../../utils/utils.ts';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const authStatus: AuthorizationStatus = useAppSelector(getAuthorizationStatus);
  useEffect(() => {
    dispatch(getOfferAction(id));
    dispatch(fetchNearOffersAction(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);
  const offer = useAppSelector(getOffersInfo);
  const nearOffers = useAppSelector(getNearOffers).slice(-3);
  const comments = useAppSelector(getComments);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!offer) {
    return (
      <NotFoundScreen />
    );
  }
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.slice(0, OFFER_IMAGE_COUNT).map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio"></img>
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer.title}
              </h1>
              <BookmarkButton displayMode={BookmarkButtonDisplayMode.offer} isFavorite={offer.isFavorite} offerId={offer.id}/>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: calcStarsWidthPercent(offer.rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {ucFirst(offer.type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {/* TODO: Bedroom/Bedrooms */}
                {offer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                {/* TODO: adult/adults */}
                  Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer.goods.map((good) => (
                  <li key={good} className="offer__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"></img>
                </div>
                <span className="offer__user-name">
                  {offer.host.name}
                </span>
                {offer.host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offer.title}
                </p>
                <p className="offer__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
              <ReviewsList comments={comments}/>
              {(authStatus === AuthorizationStatus.Auth)
                ? <ReviewForm offerId={offer.id}/>
                : ''}
            </section>
          </div>
        </div>
        <section className="offer__map map">
          <Map city={offer.city} offers={[offer, ...nearOffers]} selectedOffer={offer}/>
        </section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlaceList displayMode={CardDisplayMode.near} offers={nearOffers}/>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;

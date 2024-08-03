import { useParams } from 'react-router-dom';
import { Comments, Offer, OfferInfo, Offers } from '../types/types.ts';
import NotFoundScreen from './not-found-screen.tsx';
import ReviewForm from '../components/review-form/review-form.tsx';
import { getOfferInfoById } from '../utils/utils.ts';
import BookmarkButton from '../components/bookmark-button/bookmark-button.tsx';
import { BookmarkButtonDisplayMode, CardDisplayMode } from '../const.ts';
import ReviewsList from '../components/reviews-list/reviews-list.tsx';
import { mockComments } from '../mocks/comments.ts';
import PlaceList from '../components/place-list/place-list.tsx';
import Map from '../components/map/map.tsx';
import { useAppSelector } from '../hooks/index.ts';

function OfferScreen(): JSX.Element {
  const params = useParams();
  const comments: Comments = mockComments;
  const offers = useAppSelector((state) => state.offers);
  let offer: OfferInfo | undefined = undefined;
  let selectedOffer: Offer | undefined = undefined;
  let nearOffers: Offers = [];
  let points: Offers = [];
  if (params.id) {
    offer = getOfferInfoById(params.id);
    //selectedOffer = getOfferById(params.id);
    selectedOffer = offers.find((element) => element.id === params.id);
    //nearOffers = mockOffers.filter((item) => item.city.name === offer?.city.name).slice(-3);
    nearOffers = [];
    points = [...nearOffers];
    if (selectedOffer) {
      points.push(selectedOffer);
    }
  }
  if (!offer || !selectedOffer) {
    return (
      <NotFoundScreen />
    );
  }
  return(
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.map((image) => (
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
              <BookmarkButton displayMode={BookmarkButtonDisplayMode.offer} isFavorite={offer.isFavorite} />
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${(offer.rating) ? offer.rating * 20 : 0}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {/* TODO: С заглавной буквы */}
                {offer.type}
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
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="offer__map map">
          <Map city={offer.city} offers={points} selectedOffer={selectedOffer}/>
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

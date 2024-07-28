import { CardDisplayMode } from '../../const';
import { Offers } from '../../types';
import { getOffersByCity } from '../../utils';
import PlaceList from '../place-list/place-list';

type FavoritesListProps = {
  favoriteOffers: Offers;
}

function FavoritesList({favoriteOffers}: FavoritesListProps): JSX.Element {
  const offersByCity = getOffersByCity(favoriteOffers);
  return (
    <ul className="favorites__list">
      {offersByCity.map((offer) => (
        <li className="favorites__locations-items" key={offer.city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{offer.city}</span>
              </a>
            </div>
          </div>
          <PlaceList offers={offer.offers} displayMode={CardDisplayMode.favorite}/>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;

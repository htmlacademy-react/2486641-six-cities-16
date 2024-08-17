import { CardDisplayMode } from '../../const';
import { Offers } from '../../types/types';
import { getOffersGroupByCity } from '../../utils/utils';
import PlaceList from '../place-list/place-list';

type FavoritesListProps = {
  favoriteOffers: Offers;
}

function FavoritesList({favoriteOffers}: FavoritesListProps): JSX.Element {
  const offersByCity = getOffersGroupByCity;
  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity(favoriteOffers)).map(([key, value]) => (
        <li className="favorites__locations-items" key={key}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{key}</span>
              </a>
            </div>
          </div>
          <PlaceList offers={value} displayMode={CardDisplayMode.Favorite}/>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;

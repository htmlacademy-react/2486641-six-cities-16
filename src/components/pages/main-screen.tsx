import { useState } from 'react';
import { CardDisplayMode } from '../../const';
import { Offers } from '../../types';
import { getCities } from '../../utils';
import Map from '../map/map';
import PlaceList from '../place-list/place-list';
import { Link } from 'react-router-dom';

type MainScreenProps = {
  offers: Offers;
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const [activeCity, setActiveCity] = useState('Amsterdam');
  const selectedOffer = {
    'id': '7593808c-13bf-484e-b869-fdd1b6c0e457',
    'title': 'House in countryside',
    'type': 'room',
    'price': 275,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  };
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {getCities().map((city) => (
              <li className="locations__item" key={city.name}>
                <Link
                  className={`locations__item-link tabs__item ${(activeCity === city.name) ? 'tabs__item--active' : ''}`}
                  to="#"
                  onClick={() => setActiveCity(city.name)}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {activeCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <PlaceList offers={offers} displayMode={CardDisplayMode.city}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {<Map cityName={activeCity} offers={offers} selectedOffer={selectedOffer} />}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;

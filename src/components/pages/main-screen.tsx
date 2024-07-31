import { useState } from 'react';
import { CardDisplayMode } from '../../const';
import { Offer, Offers } from '../../types';
import { getCities } from '../../utils';
import Map from '../map/map';
import PlaceList from '../place-list/place-list';
import { Link } from 'react-router-dom';

type MainScreenProps = {
  offers: Offers;
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const [activeCity, setActiveCity] = useState('Amsterdam');
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleMouseOver = (offer?: Offer) => {
    setActiveCard(offer || null);
  };
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);
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
            <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
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
            <PlaceList offers={filteredOffers} displayMode={CardDisplayMode.city} onMouseOver={handleMouseOver}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {<Map cityName={activeCity} offers={filteredOffers} selectedOffer={activeCard || undefined} />}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;

import { useState } from 'react';
import { CardDisplayMode } from '../const';
import { CityType, Offer } from '../types/types';
import { getCities } from '../utils';
import Map from '../components/map/map';
import PlaceList from '../components/place-list/place-list';
import CityList from '../components/city-list/city-list';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeCity } from '../store/action';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.cityName);
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleMouseOver = (offer?: Offer) => {
    setActiveCard(offer || null);
  };
  const handleSelectCity = (cityName: CityType['name']) => dispatch(changeCity({cityName: cityName}));
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList activeCity={activeCity} cities={getCities()} onSelectCity={handleSelectCity}/>
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

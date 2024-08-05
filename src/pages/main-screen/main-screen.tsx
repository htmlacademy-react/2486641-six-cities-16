import { useState } from 'react';
import { CardDisplayMode } from '../../const';
import { City, Offer } from '../../types/types';
import Map from '../../components/map/map';
import PlaceList from '../../components/place-list/place-list';
import CityList from '../../components/city-list/city-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import { SortRules } from '../../utils/sort';
import { mockCities } from '../../mocks/cities';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);
  const activeSort = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleMouseOver = (offer?: Offer) => {
    setActiveCard(offer || null);
  };
  const handleSelectCity = (city: City) => dispatch(changeCity({city: city}));
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name).sort(SortRules[activeSort]);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList activeCity={activeCity} cities={mockCities} onSelectCity={handleSelectCity}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffers.length} places to stay in {activeCity?.name}</b>
            <PlacesSorting />
            <PlaceList offers={filteredOffers} displayMode={CardDisplayMode.city} onMouseOver={handleMouseOver}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {<Map city={activeCity} offers={filteredOffers} selectedOffer={activeCard || undefined} />}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;

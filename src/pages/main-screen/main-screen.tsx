import { useCallback, useState } from 'react';
import { CardDisplayMode, Sort } from '../../const';
import { City, Offer } from '../../types/types';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { PlacesSorting } from '../../components/places-sorting/places-sorting';
import { SortRules } from '../../utils/sort';
import { getOffers } from '../../store/data-process/selectors';
import { changeCity } from '../../store/city/city';
import PlaceList from '../../components/place-list/place-list';
import { getCity } from '../../store/city/selectors';
import { Cities } from '../../store/city/const';
import EmptyOffers from '../../components/empty-offers/empty-offers';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCity);
  const [activeSort, setSort] = useState(Sort.popular);
  const handleChangeSort = useCallback((sort: Sort) => {
    setSort(sort);
  }, []);
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleChangeActiveCard = useCallback((offer?: Offer) => {
    setActiveCard(offer || null);
  }, []);
  const handleSelectCity = (city: City) => dispatch(changeCity({city: city}));
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name).sort(SortRules[activeSort]);
  const cities = Object.entries(Cities).map((item) => item[1]);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList activeCity={activeCity} cities={cities} onSelectCity={handleSelectCity}/>
        </section>
      </div>
      {offers.length
        ?
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {activeCity?.name}</b>
              <PlacesSorting activeSort={activeSort} onChangeSort={handleChangeSort}/>
              <PlaceList offers={filteredOffers} displayMode={CardDisplayMode.city} onMouseOver={handleChangeActiveCard}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {<Map city={activeCity} offers={filteredOffers} selectedOffer={activeCard || undefined} />}
              </section>
            </div>
          </div>
        </div>
        : <EmptyOffers city={activeCity}/>}
    </main>
  );
}

export default MainScreen;

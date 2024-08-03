import { Link } from 'react-router-dom';
import { City } from '../../types/types';

type CityListProps = {
  cities: City[];
  activeCity: City;
  onSelectCity: (city: City) => void;
}

function CityList({cities, activeCity, onSelectCity}: CityListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <Link
            className={`locations__item-link tabs__item ${(activeCity.name === city.name) ? 'tabs__item--active' : ''}`}
            to="#"
            onClick={() => onSelectCity(city)}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CityList;

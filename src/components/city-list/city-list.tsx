import { Link } from 'react-router-dom';
import { CityType } from '../../types/types';

type CityListProps = {
  cities: CityType[];
  activeCity: CityType['name'];
  onSelectCity: (cityName: CityType['name']) => void;
}

function CityList({cities, activeCity, onSelectCity}: CityListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <Link
            className={`locations__item-link tabs__item ${(activeCity === city.name) ? 'tabs__item--active' : ''}`}
            to="#"
            onClick={() => onSelectCity(city.name)}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CityList;

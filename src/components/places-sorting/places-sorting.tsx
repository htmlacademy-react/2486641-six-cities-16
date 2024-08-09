import { memo, useState } from 'react';
import { Sort } from '../../const';

type PlacesSortingProps = {
  activeSort: Sort;
  onChangeSort: (sort: Sort) => void;
}

function PlacesSortingComponent({activeSort, onChangeSort}: PlacesSortingProps): JSX.Element {
  const [sortOpened, setSortOpened] = useState(false);
  const handleSortOpened = () => setSortOpened(!sortOpened);
  const handleSetSort = (value: Sort) => {
    onChangeSort(value);
    handleSortOpened();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortOpened}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${(sortOpened) ? 'places__options--opened' : ''}`}>
        {Object.entries(Sort).map(([key, value], index) => (
          <li
            className={`places__option ${(activeSort === value) ? 'places__option--active' : ''}`}
            tabIndex={index}
            key={key}
            onClick={() => handleSetSort(value)}
          >
            {value}
          </li>)
        )}
      </ul>
    </form>
  );
}

export const PlacesSorting = memo(PlacesSortingComponent);

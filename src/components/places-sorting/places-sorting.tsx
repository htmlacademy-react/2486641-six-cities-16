import { useState } from 'react';
import { Sort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSort } from '../../store/sort/sort';
import { getSort } from '../../store/sort/selectors';

function PlacesSorting(): JSX.Element {
  const activeSort = useAppSelector(getSort);
  const dispatch = useAppDispatch();
  const [sortOpened, setSortOpened] = useState(false);
  const handleSortOpened = () => setSortOpened(!sortOpened);
  const handleSetSort = (value: Sort) => {
    dispatch(setSort({sort: value}));
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

export default PlacesSorting;

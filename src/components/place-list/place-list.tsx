import PlaceCard from '../place-card/place-card';
import { Offer, Offers } from '../../types/types';
import { CardDisplayMode, CardListClass } from '../../const';

type PlaceListProps = {
  offers: Offers;
  displayMode: CardDisplayMode;
  onMouseOver?: (card?: Offer) => void;
}

function PlaceList({offers, displayMode, onMouseOver}: PlaceListProps): JSX.Element {
  return (
    <div className={CardListClass[displayMode]}>
      {offers.map((item) => (
        <PlaceCard key={item.id} offer={item} onMouseOver={onMouseOver} displayMode={displayMode}/>
      ))}
    </div>
  );
}

export default PlaceList;

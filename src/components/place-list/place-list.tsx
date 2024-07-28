import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offer, Offers } from '../../types';
import { CardDisplayMode, CardListClass } from '../../const';

type PlaceListProps = {
  offers: Offers;
  displayMode: CardDisplayMode;
}

function PlaceList({offers, displayMode}: PlaceListProps): JSX.Element {
  const [, setActiveCardId] = useState<Offer['id'] | null>(null);
  return (
    <div className={CardListClass[displayMode]}>
      {offers.map((item) => (
        <PlaceCard key={item.id} offer={item} onMouseOver={setActiveCardId} displayMode={displayMode}/>
      ))}
    </div>
  );
}

export default PlaceList;

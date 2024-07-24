import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offer, Offers } from '../../types';

type PlaceListProps = {
  offers: Offers;
}

function PlaceList({offers}: PlaceListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<Offer['id'] | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <PlaceCard key={item.id} offer={item} handleMouseOver={setActiveCardId}/>
      ))}
    </div>
  );
}

export default PlaceList;

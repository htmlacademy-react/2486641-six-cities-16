import React, { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types';

type PlaceListProps = {
  offers: Offers;
}

function PlaceList({offers}: PlaceListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <React.Fragment key={item.id}>
          <PlaceCard key={item.id} offer={item} handleMouseOver={(cardId) => setActiveCardId(cardId)}/>
        </React.Fragment>
      ))}
    </div>
  );
}

export default PlaceList;

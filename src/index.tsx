import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getFavoriteOffers, mockOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offers = mockOffers;
const favoriteOffers = getFavoriteOffers();

root.render(
  <React.StrictMode>
    <App offers={offers} favoriteOffers={favoriteOffers} />
  </React.StrictMode>
);

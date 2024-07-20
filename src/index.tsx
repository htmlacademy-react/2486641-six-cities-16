import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';

const PLACES_COUNT = 777;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offers: typeof mockOffers = mockOffers;

root.render(
  <React.StrictMode>
    <App placesCount={PLACES_COUNT} offers={offers} />
  </React.StrictMode>
);

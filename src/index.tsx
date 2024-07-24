import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offers = mockOffers;

root.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>
);

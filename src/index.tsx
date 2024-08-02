import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getFavoriteOffers } from './utils';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const favoriteOffers = getFavoriteOffers();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App favoriteOffers={favoriteOffers} />
    </Provider>
  </React.StrictMode>
);

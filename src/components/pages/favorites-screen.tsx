import { Fragment } from 'react';
import { Offers } from '../../types';
import FavoritesList from '../favorites-list/favorites-list';

type FavoritesScreenProps = {
  favoriteOffers: Offers;
}

function FavoritesScreen({favoriteOffers}: FavoritesScreenProps): JSX.Element {
  //console.log(favoriteOffers);
  return(
    <Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoriteOffers={favoriteOffers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
        </a>
      </footer>
    </Fragment>
  );
}

export default FavoritesScreen;

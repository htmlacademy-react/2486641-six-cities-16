import { Fragment } from 'react';
import { Offers } from '../types/types';
import FavoritesList from '../components/favorites-list/favorites-list';
import Logo from '../components/logo/logo';
import { LogoDisplayMode } from '../const';

type FavoritesScreenProps = {
  favoriteOffers: Offers;
}

function FavoritesScreen({favoriteOffers}: FavoritesScreenProps): JSX.Element {
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
        <Logo displayMode={LogoDisplayMode.footer}/>
      </footer>
    </Fragment>
  );
}

export default FavoritesScreen;

import { Fragment, useEffect } from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Logo from '../../components/logo/logo';
import { LogoDisplayMode } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/favorites/thunks';
import { getFavorites } from '../../store/favorites/selectors';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  const favoriteOffers = useAppSelector(getFavorites);
  return(
    (favoriteOffers.length)
      ?
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
      :
      <Fragment>
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
          </a>
        </footer>
      </Fragment>
  );
}

export default FavoritesScreen;

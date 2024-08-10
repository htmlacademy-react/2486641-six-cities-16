import { Fragment, useEffect } from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Logo from '../../components/logo/logo';
import { LogoDisplayMode } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/data-process/selectors';
import { fetchFavorites } from '../../store/api-actions';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  const favoriteOffers = useAppSelector(getFavorites);
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

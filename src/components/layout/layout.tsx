import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute, AuthorizationStatus, LogoDisplayMode, PageClass } from '../../const';
import UserNav from '../user-nav/user-nav';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/offers/selectors';

type LayoutProps = {
  authStatus: AuthorizationStatus;
}

function Layout({authStatus}: LayoutProps): JSX.Element {
  const currentPage = useLocation().pathname;
  const favorites = useAppSelector(getFavorites);
  let pageClass = 'page ';
  switch (currentPage) {
    case AppRoute.Main:
      pageClass += PageClass.Main;
      break;
    case AppRoute.Login:
      pageClass += PageClass.Login;
      break;
    case AppRoute.Favorites:
      if (!favorites.length){
        pageClass += PageClass.FavoritesEmpty;
      }
      break;
  }
  return (
    <div
      className={pageClass}
    >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo displayMode={LogoDisplayMode.Header}/>
            </div>
            {(currentPage === AppRoute.Login as string) ? '' : <UserNav authStatus={authStatus} favorites={favorites}/>}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;

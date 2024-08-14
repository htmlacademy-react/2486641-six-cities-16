import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute, AuthorizationStatus, LogoDisplayMode, PageClass } from '../../const';
import UserNav from '../user-nav/user-nav';

type LayoutProps = {
  authStatus: AuthorizationStatus;
}

function Layout({authStatus}: LayoutProps): JSX.Element {
  const currentPage = useLocation().pathname;
  let pageClass = 'page ';
  switch (currentPage) {
    case AppRoute.Main: 
      pageClass += PageClass.main;
      break;
    case AppRoute.Login: 
      pageClass += PageClass.login;
      break;
  }
  return (
    <div
      className={pageClass}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo displayMode={LogoDisplayMode.header}/>
            </div>
            {(currentPage === AppRoute.Login) ? '' : <UserNav authStatus={authStatus}/>}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;

import { Outlet } from 'react-router-dom';
import Logo from '../logo/logo';
import { AuthorizationStatus, LogoDisplayMode } from '../../const';
import UserNav from '../user-nav/user-nav';

type LayoutProps = {
  authStatus: AuthorizationStatus;
}

function Layout({authStatus}: LayoutProps): JSX.Element {
  return (
    // TODO: page--gray page--main только на главной странице
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo displayMode={LogoDisplayMode.header}/>
            </div>
            <UserNav authStatus={authStatus}/>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;

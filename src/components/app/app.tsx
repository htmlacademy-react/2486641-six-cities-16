import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../pages/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginScreen from '../pages/login-screen';
import FavoritesScreen from '../pages/favorites-screen';
import OfferScreen from '../pages/offer-screen';
import NotFoundScreen from '../pages/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import NoAuthRoute from '../no-auth-route/no-auth-route';
import { Offers } from '../../types';
import Layout from '../layout/layout';

type AppProps = {
  offers: Offers;
  favoriteOffers: Offers;
}

function App({offers, favoriteOffers}: AppProps): JSX.Element {
  const AuthStatus: AuthorizationStatus = AuthorizationStatus.Auth;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<Layout />}
        >
          <Route
            index
            element = {<MainScreen offers={offers} />}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <NoAuthRoute
                authorizationStatus={AuthStatus}
              >
                <LoginScreen />
              </NoAuthRoute>
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute
                authorizationStatus={AuthStatus}
              >
                <FavoritesScreen favoriteOffers={favoriteOffers}/>
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Offer}
            element = {<OfferScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

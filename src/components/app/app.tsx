import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../pages/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginScreen from '../pages/login-screen';
import FavoritesScreen from '../pages/favorites-screen';
import OfferScreen from '../pages/offer-screen';
import NotFoundScreen from '../pages/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import NoAuthRoute from '../no-auth-route/no-auth-route';
import { mockOffers } from '../../mocks/offers';

type AppProps = {
  placesCount: number;
  offers: typeof mockOffers;
}

function App({placesCount}: AppProps): JSX.Element {
  const AuthStatus: AuthorizationStatus = AuthorizationStatus.Auth;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainScreen placesCount={placesCount} />}
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
              <FavoritesScreen />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

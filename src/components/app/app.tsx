import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import NoAuthRoute from '../no-auth-route/no-auth-route';
import Layout from '../layout/layout';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getErrorStatus, getOffersDataLoadingStatus } from '../../store/offers/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';

function App(): JSX.Element {
  const authStatus: AuthorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);
  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  if (hasError) {
    return (
      <ErrorScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<Layout authStatus={authStatus}/>}
        >
          <Route
            index
            element = {<MainScreen />}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <NoAuthRoute
                authorizationStatus={authStatus}
              >
                <LoginScreen />
              </NoAuthRoute>
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute
                authorizationStatus={authStatus}
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

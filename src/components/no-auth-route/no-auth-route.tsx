import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type NoAuthRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function NoAuthRoute(props: NoAuthRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}

export default NoAuthRoute;

import { Link } from 'react-router-dom';
import { AppRoute, LogoDisplayMode, LogoSettings } from '../../const';

type LogoProps = {
  displayMode: LogoDisplayMode;
}

function Logo({displayMode}: LogoProps): JSX.Element {
  const {linkClass, imgClass, imgHeight, imgWidth} = LogoSettings[displayMode];
  return (
    <Link className={linkClass} to={AppRoute.Main} data-testid='logo-link'>
      <img className={imgClass} src="img/logo.svg" alt="6 cities logo" width={imgWidth} height={imgHeight}></img>
    </Link>
  );
}

export default Logo;

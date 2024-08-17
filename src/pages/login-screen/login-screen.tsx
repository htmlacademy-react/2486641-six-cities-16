import { useAppDispatch } from '../../hooks';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/user/thunks';
import { AppRoute, PASSWORD_PATTERN } from '../../const';
import { getRandomCity } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { changeCity } from '../../store/city/city';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  const randomCity = getRandomCity();
  return(
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                ref={loginRef}
              >
              </input>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                ref={passwordRef}
                pattern={PASSWORD_PATTERN}
                title="Пароль должен состоять минимум из одной буквы и цифры"
              >
              </input>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoute.Main}
              onClick={() => {
                dispatch(changeCity({city: randomCity}));
              }}
            >
              <span>{randomCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;

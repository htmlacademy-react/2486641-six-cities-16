import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withBrowserRouter, withStore } from '../../utils/mock-component';
import LoginScreen from './login-screen';

describe('Component: LoginScreen', () => {
  it('should render correctly', () => {
    const loginText = 'E-mail';
    const passwordText = 'Password';
    const { withStoreComponent } = withStore(<LoginScreen />, {});
    const preparedComponent = withBrowserRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(loginText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const loginElementTestId = 'loginElement';
    const passwordElementTestId = 'passwordElement';
    const expectedLoginValue = 'user@email.com';
    const expectedPasswordValue = 'qwer123';
    const { withStoreComponent } = withStore(<LoginScreen />, {});
    const preparedComponent = withBrowserRouter(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(loginElementTestId),
      expectedLoginValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedLoginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});

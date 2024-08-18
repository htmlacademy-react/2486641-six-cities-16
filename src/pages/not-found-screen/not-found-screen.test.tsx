import { render, screen } from '@testing-library/react';
import NotFoundScreen from './not-found-screen';
import { withBrowserRouter } from '../../utils/mock-component';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404 Not Found!';
    const expectedLinkText = 'Вернуться на главную';

    render(withBrowserRouter(<NotFoundScreen />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();

    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});

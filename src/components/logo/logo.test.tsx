import { render, screen } from '@testing-library/react';
import { LogoDisplayMode } from '../../const';
import Logo from './logo';
import { withBrowserRouter } from '../../utils/mock-component';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const logoLinkTestId = 'logo-link';
    const expectedAltText = '6 cities logo';
    const preparedComponent = withBrowserRouter(<Logo displayMode={LogoDisplayMode.Header}/>);

    render(preparedComponent);

    expect(screen.getByTestId(logoLinkTestId)).toBeInTheDocument();
    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});

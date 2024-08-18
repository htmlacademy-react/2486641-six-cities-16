import { BrowserRouter } from 'react-router-dom';

export function withBrowserRouter(component: JSX.Element) {
  return (
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
}

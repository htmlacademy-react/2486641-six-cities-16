import MainScreen from './pages/main-screen';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount} />
  );
}

export default App;

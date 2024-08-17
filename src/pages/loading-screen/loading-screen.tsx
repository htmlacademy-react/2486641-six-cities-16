import './style/index.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className='loading'>
      <div className='globe-container'>
        <div className='globe'>
          <div className='globe-sphere'></div>
          <div className='globe-outer-shadow'></div>
          <div className='globe-worldmap'>
            <div className='globe-worldmap-back'></div>
            <div className='globe-worldmap-front'></div>
          </div>
          <div className='globe-inner-shadow'></div>
        </div>
        <div className="spinner-text">Loading</div>
      </div>
    </div>
  );
}

export default LoadingScreen;

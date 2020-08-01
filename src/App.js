import React,{useState} from 'react';
import SocialMediaCardContainer from './containers/SocialMediaCardContainer'
import StatCardsContainer from './containers/StatCardsContainer';
import HeaderMediaDashboard from './components/HeaderMediaDashboard';
import './App.scss';
function App() {
  const [lightTheme,setlightTheme] = useState(true)
  return (
    <div className={`App ${lightTheme ? 'light' : 'dark'}`}>
      <HeaderMediaDashboard setlightTheme={setlightTheme} lightTheme={lightTheme} />
      <SocialMediaCardContainer />
      <div className="overviewDivision">
        Overview - Today
      </div>
      <StatCardsContainer />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge"  rel="noopener noreferrer" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/DannyBrito">Danny Brito</a>.
    </div>
    </div>
  );
}

export default App;

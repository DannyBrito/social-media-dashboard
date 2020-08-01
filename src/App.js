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
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import SocialMediaCardContainer from './containers/SocialMediaCardContainer'
import StatCardsContainer from './containers/StatCardsContainer';
import HeaderMediaDashboard from './components/HeaderMediaDashboard';
function App() {
  return (
    <div className="App">
      <HeaderMediaDashboard />
      <SocialMediaCardContainer />
      <div className="overviewDivision">
        Overview - Today
      </div>
      <StatCardsContainer />
    </div>
  );
}

      
// Social Media Dashboard
// Total Followers: 23,004
// Dark Mode

// Overview - Today

export default App;

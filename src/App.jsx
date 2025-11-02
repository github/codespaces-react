import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SocialFeed from './pages/SocialFeed';
import RaiseIssue from './pages/RaiseIssue';
import Fundraiser from './pages/Fundraiser';
import Explore from './pages/Explore';
import OnlineProtestRoom from './pages/OnlineProtestRoom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<SocialFeed />} />
          <Route path="/raise-issue" element={<RaiseIssue />} />
          <Route path="/fundraisers" element={<Fundraiser />} />
          <Route path="/protests" element={<OnlineProtestRoom />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
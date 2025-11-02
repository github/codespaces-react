import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import SocialFeed from './components/SocialFeed';
import RaiseIssue from './components/RaiseIssue';
import CampaignDetail from './components/CampaignDetail';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const noLayoutRoutes = ['/login'];

  return (
    noLayoutRoutes.includes(location.pathname) ? (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    ) : (
      <Layout>
        <Routes>
          <Route path="/" element={<SocialFeed />} />
          <Route path="/raise-issue" element={<RaiseIssue />} />
          <Route path="/campaign" element={<CampaignDetail />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    )
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

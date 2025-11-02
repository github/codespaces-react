import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Trending from './components/Trending';
import RaiseIssue from './components/RaiseIssue';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-gray-200">
        <Routes>
          <Route path="/" element={
            <AppLayout
              left={<Sidebar />}
              middle={<Feed />}
              right={<Trending />}
            />
          } />
          <Route path="/raise-issue" element={
            <AppLayout
            left={<Sidebar />}
            middle={<RaiseIssue />}
            right={<Trending />}
          />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

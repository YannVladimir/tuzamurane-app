// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';  // Import Dashboard
import CheckLoans from './pages/CheckLoans';
import CheckShares from './pages/CheckShares';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar />
          <div className="page-display">
            <Routes>
              <Route path="/" element={<Dashboard />} />  {/* Default to Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/checkLoans" element={<CheckLoans />} />
              <Route path="/checkShares" element={<CheckShares />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

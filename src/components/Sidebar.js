// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/checkLoans">Check Loans</a></li>
        <li><a href="/checkShares">Check Shares</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

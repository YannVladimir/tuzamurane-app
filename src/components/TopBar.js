// src/components/TopBar.js
import React from 'react';
import '../styles/TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="title">MyApp</div>
      <div className="profile">
        <span className="username">Username</span>
        <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
}

export default TopBar;

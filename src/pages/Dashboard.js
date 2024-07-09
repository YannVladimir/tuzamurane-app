// src/pages/Dashboard.js
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import '../styles/Dashboard.css';

const data = [
  { name: 'Jan', loans: 4000, shares: 2400 },
  { name: 'Feb', loans: 3000, shares: 1398 },
  { name: 'Mar', loans: 2000, shares: 9800 },
  { name: 'Apr', loans: 2780, shares: 3908 },
  { name: 'May', loans: 1890, shares: 4800 },
  { name: 'Jun', loans: 2390, shares: 3800 },
  { name: 'Jul', loans: 3490, shares: 4300 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Total Loans</h2>
          <p>123</p>
        </div>
        <div className="card">
          <h2>Total Shares</h2>
          <p>456</p>
        </div>
        <div className="card">
          <h2>Notifications</h2>
          <p>You have 5 new notifications</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <div className="chart">
          <h3>Loans Overview</h3>
          <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey="loans" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="chart">
          <h3>Shares Overview</h3>
          <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey="shares" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

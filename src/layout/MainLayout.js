import React from "react";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>CloudSEK</h2>
        <ul>
          <li>Dashboard</li>
          <li>Alerts</li>
          <li>Settings</li>
        </ul>
      </aside>

      <div className="main">
        <nav className="navbar">
          <h3>Dashboard</h3>
        </nav>

        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

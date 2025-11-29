import React from "react";
import { Link } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>CloudSEK</h2>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </aside>

      <div className="main">
        <nav className="navbar">
          <h3>Dashboard</h3>
        </nav>

        <div className="content">{children}</div>
      </div>
    </div>
  );
}

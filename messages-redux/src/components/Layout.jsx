import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">MESSAGES</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/filters" className="nav-link">Filters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default Layout;

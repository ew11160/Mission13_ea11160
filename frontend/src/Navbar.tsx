import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movie Collection</Link>
        </li>
        <li>
          <Link to="/podcasts">My Podcasts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

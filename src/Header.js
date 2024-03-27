import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Header component
function Header() {
    return (
      <header>
       <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/digital-services">Digital Services</Link></li>
          <li><Link to="/job-search">Job Search</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
    </header>
    );
}

export default Header;
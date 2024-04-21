import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Your components
import HomePage from './HomePage';
import DigitalServicesPage from './DigitalServicesPage';
import JobSearchPage from './JobSearchPage';
import AboutUsPage from './AboutUsPage';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/digital-services" element={<DigitalServicesPage />} />
        <Route path="/job-search" element={<JobSearchPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </main>
  );
}

export default Main;

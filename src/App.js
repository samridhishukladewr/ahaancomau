import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import your components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// Import other pages

function App() {
  return (<div>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
      </div>);
}

export default App;


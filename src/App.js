import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import your components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// Import other pages

function App() {
  return (<>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
      </>);
}

export default App;


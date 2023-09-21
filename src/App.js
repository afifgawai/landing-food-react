// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Services from './Services';
import Contact from './Contact';

  import Order from './Order';




const App = () => {
  return (
    <Router><div className="App">

    <Routes>
    
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/services" element={<Services/>} exact/>
      <Route path="/contact" element={<Contact/>} exact/>
      <Route path="order-now" element={<Order/>} exact/>
  

    </Routes>
  </div>

  </Router>
  )
}

export default App




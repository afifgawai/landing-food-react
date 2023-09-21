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
      <Route path="/landing-food-react" element={<LandingPage />} />
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="order-now" element={<Order/>}/>
  

    </Routes>
  </div>

  </Router>
  )
}

export default App




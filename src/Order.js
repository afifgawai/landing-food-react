import React from 'react';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
const Order = () => {
  return (
    <div className="App">
    <Header />
    <div className="container container-fluid">
        <Home/>
      
    </div>
    <Footer />
  </div>
  )
}

export default Order

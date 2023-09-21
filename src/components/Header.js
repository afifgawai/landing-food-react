import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar row sticky-top">
        <div className="col-12 col-md-3">
          <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
          
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Search your fav restaurant"
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/">
          <span className="ml-3 mx-3" id="cart">HOME</span>

          </Link>
      
          <button className="btn" id="login_btn">LOGIN</button>
          <span className="ml-3" id="cart">CART</span>
          <span className="ml-1" id="cart_count">3</span>
          
        </div>
      </nav>
    </>
  );
};

export default Header;

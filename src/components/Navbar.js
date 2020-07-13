import { Link } from "react-router-dom";
import React, { Component } from "react";
import "../styles/Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">

        <Link to="/login">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="logo-img"
          />
        </Link>

        <div className="search-div">
          <input type="text" className="search-bar" />
          <SearchIcon className="search-icon" />
        </div>

        <div className="header-nav">

          <Link to="/login" className="header-link">
            <div className="header-option">
              <span className="line-optionOne">Hello Luis</span>
              <span className="line-optionTwo">Sign In</span>
            </div>
          </Link>

          <Link to="" className="header-link">
            <div className="header-option">
              <span className="line-optionOne">Returns</span>
              <span className="line-optionTwo">& Orders</span>
            </div>
          </Link>

          <Link to="" className="header-link">
            <div className="header-option">
              <span className="line-optionOne">Your</span>
              <span className="line-optionTwo">Prime</span>
            </div>
          </Link>

          <Link to="/chekout" className="header-link">
            <div className="checkout-div">
              <ShoppingBasketIcon className="basket-icon"></ShoppingBasketIcon>
              <span className="line-optionTwo header-basket">0</span>
            </div>
          </Link>

        </div>
      </nav>
    );
  }
}

export default Navbar;

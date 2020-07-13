import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <Router>

        <div className="app">
          <Switch>
            <Route extact path="/checkout">Checkout</Route>
            <Route extact path="/login">Login</Route>
            <Route extact path="/">
              <Navbar />
              <Home></Home>
              </Route>

          </Switch>
        </div>

      </Router>

    );
  }
}

export default App;



import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <Router>

      <div className="main">
        <Header />
        <div className="container">
          <Route exact path="/" component={ProductContainer}/>
          <Route path="/cart" component={CartContainer}/>
        </div>

      </div>
    </Router>
  );
}

export default App;

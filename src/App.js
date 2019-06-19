import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main role="main" className="container-fluid">
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/cart" component={CartContainer}/>
      </main>
    </React.Fragment>
  );
}

export default App;

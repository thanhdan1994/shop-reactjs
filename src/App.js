import React from 'react';
import { Route } from "react-router-dom";
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import CartCheckoutContainer from './containers/CartCheckoutContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import ProductTypeContainer from './containers/ProductTypeContainer';
import { Helmet } from "react-helmet";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Đồng hồ, laptop chính hãng...</title>
      </Helmet>
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route path={`/:name-p-:id`} component={ProductDetailContainer} />
      <Route path="/cart-checkout" component={CartCheckoutContainer} />
      <Route path="/:producttype-pt-:id" component={ProductTypeContainer} />
    </React.Fragment>
  );
}

export default App;

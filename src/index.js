import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/style.css';
import 'babel-polyfill';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { DataProvider } from './reducers/DataProvider';

const ScrollToTop = ({ children }) => {
  let pathname = location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
export default withRouter(ScrollToTop);
ReactDOM.render(
  <DataProvider>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </DataProvider>,
  document.getElementById('root')
);
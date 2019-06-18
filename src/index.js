import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/font-awesome.min.css';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
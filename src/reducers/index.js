
import { combineReducers } from 'redux';
import cart from './cartReducer';

const appReducers = combineReducers({
    cart
});

export default appReducers;
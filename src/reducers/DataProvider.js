import React, { useReducer } from 'react';

const DataContext = React.createContext();

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product._id === product._id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

function CartReducer(state, action) {
    var { product, quantity } = action;
    var index = -1; // Không tìm thấy => index = -1
    switch (action.type) {
        case 'ADD_TO_CART':
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case 'CHANGE_QUANTITY':
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case 'REMOVE_PRODUCT_IN_CART':
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

function DataProvider(props) {
    var cartInitial = JSON.parse(localStorage.getItem('CART'));
    const initialState = cartInitial ? cartInitial : []
    const [cart, dispatch] = useReducer(CartReducer, initialState);
    return (
        // new
        <DataContext.Provider value={{ cart, dispatch }}>
            {props.children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider }
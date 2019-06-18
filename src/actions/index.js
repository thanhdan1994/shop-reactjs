export const actAddToCart = (product, quantity) => {
    return {
        type: 'ADD_TO_CART',
        product,
        quantity
    }
}

export const actChangeQuantity = (product, quantity) => {
    return {
        type: 'CHANGE_QUANTITY',
        product,
        quantity
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type: 'REMOVE_PRODUCT_IN_CART',
        product
    }
}
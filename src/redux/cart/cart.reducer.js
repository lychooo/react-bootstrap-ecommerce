import CartActionTypes from './cart.types';
import { addProductToCart, decreaseProductFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartProducts: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...state,
                cartProducts: addProductToCart(state.cartProducts, action.payload)
            };
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.filter(cartProduct => {
                    return cartProduct.id !== action.payload.id;
                })
            };
        case CartActionTypes.DECREASE_PRODUCT:
            return {
                ...state,
                cartProducts: decreaseProductFromCart(state.cartProducts, action.payload)
            }
        default:
            return state;
    };
};

export default cartReducer;
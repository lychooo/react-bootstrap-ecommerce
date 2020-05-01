import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartProducts = createSelector(
    [selectCart],
    cart => cart.cartProducts
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartProductCount = createSelector(
    [selectCartProducts],
    cartProducts => cartProducts.reduce((accQuantity, cartProduct) => {
        accQuantity += cartProduct.quantity

        return accQuantity;
    }, 0)
);

export const selectCartTotal = createSelector(
    [selectCartProducts],
    cartProducts => cartProducts.reduce((accTotalPrice, cartProduct) => {
        accTotalPrice += cartProduct.quantity * cartProduct.price

        return accTotalPrice.toFixed(2);
    }, 0)
);
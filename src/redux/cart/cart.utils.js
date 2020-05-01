export const addProductToCart = (cartProducts, cartProductToAdd) => {
    const existingCartProduct = cartProducts.find(
        cartProduct => cartProduct.id === cartProductToAdd.id
    );

    if (existingCartProduct) {
        return cartProducts.map(cartProduct =>
            cartProduct.id === cartProductToAdd.id
                ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
                : cartProduct
        );
    };

    return [...cartProducts, { ...cartProductToAdd, quantity: 1}];
};
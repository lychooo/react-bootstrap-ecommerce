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

    return [...cartProducts, { ...cartProductToAdd, quantity: 1 }];
};

export const decreaseProductFromCart = (cartProducts, cartProductsToDecrease) => {
    const existingCartProduct = cartProducts.find(cartProduct => {
        return cartProduct.id === cartProductsToDecrease.id;
    });

    if (existingCartProduct.quantity === 1) {
        return cartProducts.filter(
            cartProduct => cartProduct.id !== cartProductsToDecrease.id
        )
    };

    return cartProducts.map(cartProduct =>
        cartProduct.id === cartProductsToDecrease.id
            ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
            : cartProduct
    )
};
export const addShoe = (shoe) => ({
    type : 'ADD_SHOE',
    shoe
});

export const editShoe = (id,update) => ({
    type : 'EDIT_SHOE',
    id,
    update
});

export const addToCart = (product) => ({
    type : 'ADD_TO_CART',
    product
});

export const removeFromCart = (product) => ({
    type : 'REMOVE_FROM_CART',
    product
});

const initialState = [];
const cartInitialState = {
    cartItems: [],
  };
console.log("initialstate",initialState);
const ShoeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_SHOE' : 
            return [...state,action.shoe];
        case 'EDIT_SHOE' : 
            return state.map(shoe=>shoe.id === action.id ? {...shoe,...action.updates} : shoe);
        case 'DELETE_ITEM' : 
            return state.filter(item => item.id === action.payload ? item : {...item,...action.updates});
        default:
            return state;
    }   
}
export const CartReducer = (state = cartInitialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART' : 
            return {
                ...state,
                cartItems:[...state.cartItems,action.product]
            }
        case 'REMOVE_FROM_CART' :
            return {
                ...state,
                cartItems:state.cartItems.filter(item=>item.id !== action.product.id)
            }
        default:
            return state;
    }   
}
export default ShoeReducer;
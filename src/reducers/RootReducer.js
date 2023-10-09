import { combineReducers } from 'redux';
import ShoeReducer from './ShoeReducer';
import { CartReducer } from './ShoeReducer';

const RootReducer = combineReducers({
    shoes : ShoeReducer,
    cart  : CartReducer
})
export default RootReducer;
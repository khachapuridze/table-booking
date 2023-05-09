import { createStore } from 'redux';
import { cartReducer } from './reducers/testReducer';

const store = createStore(cartReducer);

export default store;

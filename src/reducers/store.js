import { createStore } from 'redux';
import reducer from './index';

const store = createStore(reducer);
console.log(store.getState());

export default store;

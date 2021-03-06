import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

export default combineReducers({ bookReducer, filterReducer });

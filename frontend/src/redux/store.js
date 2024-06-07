import { createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk";
import gameReducer from './reducer';

const store = createStore(
  gameReducer,
  applyMiddleware(thunk) // Apply redux-thunk middleware
);

export default store;
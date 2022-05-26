import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { RootReducer } from '../store/reducers/RootReducer';


export const Store = createStore(RootReducer, applyMiddleware(thunk));
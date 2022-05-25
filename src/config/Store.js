import { createStore } from 'redux'
import { RootReducer } from '../store/reducers/RootReducer';

export const Store = createStore(RootReducer);
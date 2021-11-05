import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { inventoryReducer } from "./inventory/inventorySlice";
import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currencyFilterReducer } from "./currencyFilter/currencyFilterSlice";

const rootReducer = {
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer
}
export const store = createStore(combineReducers(rootReducer), composeWithDevTools(applyMiddleware()))
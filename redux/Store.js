import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
const rootReducer = combineReducers({
    counter: CounterReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import NoteReducer from './NoteSlice';

import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
    counter: CounterReducer,
    notes: NoteReducer
});

const persistConfig = {
    key:'root',
    version:1,
    storage: AsyncStorage,
    // whitelist:['notes'],
    // backlist:['reducers1','reducers2'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware:[],
});
export const persistor = persistStore(store);
export default store;
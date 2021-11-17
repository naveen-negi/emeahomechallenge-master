import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import React from 'react';
import reducers from './reducers';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  timeout: 1000,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

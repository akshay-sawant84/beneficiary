import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedReducer from './persistReducer';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

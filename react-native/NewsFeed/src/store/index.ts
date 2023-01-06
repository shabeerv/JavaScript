import AsyncStorage from '@react-native-community/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {rootReducer} from '../reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['newsFeed'],
  blacklist: ['status', 'error'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

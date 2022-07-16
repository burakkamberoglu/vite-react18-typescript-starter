import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';

import rootReducer from '@/redux/reducers';

const persistConfig = {
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_PERSIST_ENCRYPT_KEY,
    }),
  ],
  whitelist: ['login'],
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

const persistor = persistStore(store);
export { persistor, store };

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'cart',
  storage,
  blacklist: ['cartSidebar', 'navbar'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
   })
 
export default store;
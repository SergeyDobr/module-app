import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";
import { categoriesReducer } from "./categoriesReducer";
import { userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { oneProductReducer } from './oneProductReducer';
import { orderReducer } from './orderReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['user','order']
}

const rootReducer = combineReducers({
  order:orderReducer,
  products: productReducer,
  categories: categoriesReducer,
  user: userReducer,
  oneProduct: oneProductReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga)
  return store
}

export const store = getStore();
export const persistor = persistStore(store)
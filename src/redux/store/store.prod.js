import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/index';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['starSettings'] 
};

const middlewares = [ReduxThunk];

const enhancer = compose(applyMiddleware(ReduxThunk));
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  const store = createStore(persistedReducer, initialState, enhancer);
  let persistor = persistStore(store);

  return { store, persistor };
}

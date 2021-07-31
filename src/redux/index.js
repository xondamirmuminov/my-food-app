import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStor
import authReducer from './reducers/auth';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const rootReducers = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store)

export { store as default, persistor };
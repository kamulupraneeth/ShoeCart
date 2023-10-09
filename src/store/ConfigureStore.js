import {legacy_createStore as createStore} from 'redux';
import {persistReducer,persistStore} from 'redux-persist';
import RootReducer from '../reducers/RootReducer';
import storage from '@react-native-async-storage/async-storage'; 

const persistConfig = {
    key: 'root',
    storage: storage
  };

const persistedReducer = persistReducer(persistConfig,RootReducer);

export const store = createStore(
    persistedReducer
)

export const persistor = persistStore(store);
persistor.purge();
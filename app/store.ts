import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import userSlice from '../MockData/user/userSlice';
// import { } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import onbordingSlice from '../features/TradeModel/tradeModalSlice';
import documentSlice from '../features/document/documentSlice';
import userSlice from '../features/user/userSlice';
import tradeModalSlice from '../features/TradeModel/tradeModalSlice';

const rootReducer = combineReducers({
  user: userSlice,
  //  suid:suidSlice
  // onbording: onbordingSlice,
  trade:tradeModalSlice,
  doc: documentSlice,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['doc'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

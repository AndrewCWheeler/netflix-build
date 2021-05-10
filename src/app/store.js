import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import loadingReducer from '../features/loadingSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
});

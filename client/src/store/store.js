import { configureStore } from '@reduxjs/toolkit';
import campaignsReducer from './features/campaigns/campaignsSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    campaigns: campaignsReducer,
    auth: authReducer,
  },
});

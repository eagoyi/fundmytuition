import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  user: {
    id?: string;
    email?: string;
    name?: string;
  } | null;
  loginModalOpen: boolean;
  registerModalOpen: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loginModalOpen: false,
  registerModalOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginModalOpen: (state, action: PayloadAction<boolean>) => {
      state.loginModalOpen = action.payload;
    },
    setRegisterModalOpen: (state, action: PayloadAction<boolean>) => {
      state.registerModalOpen = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {
  setLoginModalOpen,
  setRegisterModalOpen,
  setLoggedIn,
  setUser,
  logout,
} = authSlice.actions;

export default authSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

// A mock function to simulate an API call
const fakeAuthApi = {
  login: async ({ email, password }: any) => {
    return new Promise<{ user: User; token: string }>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ user: { name: 'Test User', email }, token: 'fake-jwt-token' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },
  register: async ({ email, password }: any) => {
    return new Promise<{ user: User; token: string }>((resolve) => {
        setTimeout(() => {
            resolve({ user: { name: 'New User', email }, token: 'fake-jwt-token-new' });
        }, 500);
    });
  }
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: any) => {
    const response = await fakeAuthApi.login(credentials);
    return response;
  }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials: any) => {
        const response = await fakeAuthApi.register(credentials);
        return response;
    }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

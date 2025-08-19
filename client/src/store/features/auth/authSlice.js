import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// A mock function to simulate an API call
const fakeAuthApi = {
  login: async ({ email, password }) => {
    // In a real app, you'd send a request to your server
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ user: { name: 'Test User', email }, token: 'fake-jwt-token' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },
  register: async ({ email, password }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ user: { name: 'New User', email }, token: 'fake-jwt-token-new' });
        }, 500);
    });
  }
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials) => {
    const response = await fakeAuthApi.login(credentials);
    return response;
  }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials) => {
        const response = await fakeAuthApi.register(credentials);
        return response;
    }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

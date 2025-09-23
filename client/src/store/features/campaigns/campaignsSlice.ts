import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { campaigns, Campaign } from '../../../data/campaigns';

interface CampaignsState {
  items: Campaign[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CampaignsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchCampaigns = createAsyncThunk(
  'campaigns/fetchCampaigns',
  async () => {
    // Replace with a real API call
    return new Promise<Campaign[]>((resolve) => setTimeout(() => resolve(campaigns), 500));
  }
);

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampaigns.fulfilled, (state, action: PayloadAction<Campaign[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export default campaignsSlice.reducer;

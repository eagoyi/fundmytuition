import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Campaign {
  id: number;
  image: string;
  title: string;
  description: string;
  progress: number;
  daysLeft: number;
  backers: number;
  funded: number;
}

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

const dummyProjects: Campaign[] = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200',
    title: 'To save 100 students from dropping out of school',
    description: 'help us save some student from dropping out of school, there parent and guidian can no longer fund them we need you to keep them in school',
    progress: 53,
    daysLeft: 12,
    backers: 175,
    funded: 7000,
  },
  // ... other projects
];

export const fetchCampaigns = createAsyncThunk(
  'campaigns/fetchCampaigns',
  async () => {
    return new Promise<Campaign[]>((resolve) => setTimeout(() => resolve(dummyProjects), 500));
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

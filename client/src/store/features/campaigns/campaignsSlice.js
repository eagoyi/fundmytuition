import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const dummyProjects = [
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
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200',
    title: 'Fund 1000 slum kids to School',
    description: 'They are unfortunate to find themselves in the slum but they do not have to end in the slum, help us send 1000 kids from slum to school.',
    progress: 75,
    daysLeft: 12,
    backers: 175,
    funded: 7000,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200',
    title: 'Renovate our school',
    description: 'We cannot over estimate the importance of a condusive learning environment, we need to renoovate our school to keep it condusive fro our students.',
    progress: 75,
    daysLeft: 12,
    backers: 175,
    funded: 7000,
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x200',
    title: 'To support flood affected schools',
    description: 'We did not plan for it but it happened, now we are let with the aftermath, our school is gone, we need your help to rescconstruct our school and get our lives back to normal.',
    progress: 75,
    daysLeft: 12,
    backers: 175,
    funded: 7000,
  },
];

export const fetchCampaigns = createAsyncThunk(
  'campaigns/fetchCampaigns',
  async () => {
    // In a real app, you'd fetch from an API
    // const response = await axios.get('/api/campaigns');
    // return response.data;
    return new Promise(resolve => setTimeout(() => resolve(dummyProjects), 500));
  }
);

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campaignsSlice.reducer;

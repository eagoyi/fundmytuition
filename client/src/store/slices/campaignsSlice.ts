import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Campaign {
  id: string;
  title: string;
  description: string;
  image?: string;
  fundingGoal: number;
  fundedAmount: number;
  category?: string;
  creator?: string;
}

interface CampaignsState {
  campaigns: Campaign[];
  filteredCampaigns: Campaign[];
  selectedCampaign: Campaign | null;
  loading: boolean;
  error: string | null;
  filterCategory: string;
}

const initialState: CampaignsState = {
  campaigns: [],
  filteredCampaigns: [],
  selectedCampaign: null,
  loading: false,
  error: null,
  filterCategory: 'all',
};

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setCampaigns: (state, action: PayloadAction<Campaign[]>) => {
      state.campaigns = action.payload;
      state.filteredCampaigns = action.payload;
    },
    setSelectedCampaign: (state, action: PayloadAction<Campaign | null>) => {
      state.selectedCampaign = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload;
      state.filteredCampaigns =
        action.payload === 'all'
          ? state.campaigns
          : state.campaigns.filter((c) => c.category === action.payload);
    },
  },
});

export const {
  setCampaigns,
  setSelectedCampaign,
  setLoading,
  setError,
  setFilterCategory,
} = campaignsSlice.actions;

export default campaignsSlice.reducer;

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import {
  setCampaigns,
  setSelectedCampaign,
  setLoading,
  setError,
  setFilterCategory,
} from '../store/slices/campaignsSlice';
import { campaignService, Campaign } from '../services/campaignService';

export const useCampaigns = () => {
  const dispatch = useDispatch();
  const { campaigns, filteredCampaigns, selectedCampaign, loading, error, filterCategory } = useSelector(
    (state: RootState) => state.campaigns
  );

  const fetchCampaigns = async (filters?: { category?: string; status?: string; sortBy?: string }) => {
    dispatch(setLoading(true));
    try {
      const data = await campaignService.getAllCampaigns(filters);
      dispatch(setCampaigns(data));
      dispatch(setError(null));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch campaigns';
      dispatch(setError(errorMessage));
      console.error('[v0] Error fetching campaigns:', err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getCampaignById = async (id: string) => {
    dispatch(setLoading(true));
    try {
      const data = await campaignService.getCampaignById(id);
      dispatch(setSelectedCampaign(data));
      dispatch(setError(null));
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch campaign';
      dispatch(setError(errorMessage));
      console.error('[v0] Error fetching campaign:', err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const createCampaign = async (campaignData: Partial<Campaign>) => {
    dispatch(setLoading(true));
    try {
      const newCampaign = await campaignService.createCampaign(campaignData);
      dispatch(setError(null));
      await fetchCampaigns();
      return newCampaign;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create campaign';
      dispatch(setError(errorMessage));
      console.error('[v0] Error creating campaign:', err);
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const filterByCategory = (category: string) => {
    dispatch(setFilterCategory(category));
  };

  return {
    campaigns,
    filteredCampaigns,
    selectedCampaign,
    loading,
    error,
    filterCategory,
    fetchCampaigns,
    getCampaignById,
    createCampaign,
    filterByCategory,
  };
};

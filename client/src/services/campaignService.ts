import api from './api';

export interface Campaign {
  id: string;
  title: string;
  description: string;
  image?: string;
  fundingGoal: number;
  fundedAmount: number;
  category?: string;
  creator?: string;
  status?: 'active' | 'completed' | 'cancelled';
  createdAt?: string;
}

export const campaignService = {
  getAllCampaigns: async (filters?: {
    category?: string;
    status?: string;
    sortBy?: string;
  }): Promise<Campaign[]> => {
    try {
      const response = await api.get<Campaign[]>('/campaigns', { params: filters });
      return response.data;
    } catch (error) {
      console.error('[v0] Error fetching campaigns:', error);
      throw error;
    }
  },

  getCampaignById: async (id: string): Promise<Campaign> => {
    try {
      const response = await api.get<Campaign>(`/campaigns/${id}`);
      return response.data;
    } catch (error) {
      console.error('[v0] Error fetching campaign:', error);
      throw error;
    }
  },

  createCampaign: async (data: Partial<Campaign>): Promise<Campaign> => {
    try {
      const response = await api.post<Campaign>('/campaigns', data);
      return response.data;
    } catch (error) {
      console.error('[v0] Error creating campaign:', error);
      throw error;
    }
  },

  updateCampaign: async (id: string, data: Partial<Campaign>): Promise<Campaign> => {
    try {
      const response = await api.put<Campaign>(`/campaigns/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('[v0] Error updating campaign:', error);
      throw error;
    }
  },

  deleteCampaign: async (id: string): Promise<void> => {
    try {
      await api.delete(`/campaigns/${id}`);
    } catch (error) {
      console.error('[v0] Error deleting campaign:', error);
      throw error;
    }
  },
};

import React, { useEffect } from 'react';
import styled from 'styled-components';
import CampaignCard from '../components/CampaignCard';
import { fetchCampaigns } from '../store/features/campaigns/campaignsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const PageWrapper = styled.div`
  padding: 4rem 0;
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const CampaignsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CampaignsPage: React.FC = () => {
  const { filteredCampaigns, fetchCampaigns, filterByCategory, filterCategory, loading } = useCampaigns();

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const categories = ['all', 'education', 'research', 'scholarship'];

  const mockCampaigns = [
    {
      id: '1',
      title: 'Medical School Fund',
      fundedAmount: 5200,
      fundingGoal: 10000,
      category: 'education',
    },
    {
      id: '2',
      title: 'Tech Education Project',
      fundedAmount: 8500,
      fundingGoal: 15000,
      category: 'education',
    },
    {
      id: '3',
      title: 'Research Initiative',
      fundedAmount: 3200,
      fundingGoal: 5000,
      category: 'research',
    },
  ];

  const campaignsToDisplay = filteredCampaigns && filteredCampaigns.length > 0 ? filteredCampaigns : mockCampaigns;

  return (
    <Container>
      <PageTitle>Explore Campaigns</PageTitle>

      <FiltersAndContent>
        <Sidebar>
          <h3>Filter by Category</h3>
          <FilterGroup>
            {categories.map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  checked={filterCategory === cat}
                  onChange={() => filterByCategory(cat)}
                />
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </label>
            ))}
          </FilterGroup>

          <h3>Sort by</h3>
          <FilterGroup>
            <label>
              <input type="radio" name="sort" defaultChecked />
              Most Recent
            </label>
            <label>
              <input type="radio" name="sort" />
              Most Funded
            </label>
            <label>
              <input type="radio" name="sort" />
              Ending Soon
            </label>
          </FilterGroup>
        </Sidebar>

        <CampaignsGrid>
          {loading ? (
            <p style={{ gridColumn: '1/-1' }}>Loading campaigns...</p>
          ) : (
            campaignsToDisplay.map((campaign: any) => (
              <CampaignCard key={campaign.id} to={`/campaign/${campaign.id}`}>
                <CardImage>Campaign Image</CardImage>
                <CardContent>
                  <h4>{campaign.title}</h4>
                  <ProgressBar width={(campaign.fundedAmount / campaign.fundingGoal) * 100}>
                    <div></div>
                  </ProgressBar>
                  <ProgressText>
                    ${campaign.fundedAmount.toLocaleString()} of ${campaign.fundingGoal.toLocaleString()} raised
                  </ProgressText>
                </CardContent>
              </CampaignCard>
            ))
          )}
        </CampaignsGrid>
      </FiltersAndContent>
    </Container>
  );
};

export default CampaignsPage;

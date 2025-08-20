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
  const dispatch = useAppDispatch();
  const { items: campaigns, status, error } = useAppSelector((state) => state.campaigns);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampaigns());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <CampaignsGrid>
        {campaigns.map((project) => (
          <CampaignCard key={project.id} {...project} />
        ))}
      </CampaignsGrid>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <PageWrapper>
      <PageTitle>Explore Campaigns</PageTitle>
      {content}
    </PageWrapper>
  );
};

export default CampaignsPage;

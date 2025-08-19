import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CampaignCard from '../components/CampaignCard';
import { fetchCampaigns } from '../store/features/campaigns/campaignsSlice';

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

const CampaignsPage = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns.items);
  const campaignStatus = useSelector((state) => state.campaigns.status);
  const error = useSelector((state) => state.campaigns.error);

  useEffect(() => {
    if (campaignStatus === 'idle') {
      dispatch(fetchCampaigns());
    }
  }, [campaignStatus, dispatch]);

  let content;

  if (campaignStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (campaignStatus === 'succeeded') {
    content = (
      <CampaignsGrid>
        {campaigns.map((project) => (
          <CampaignCard key={project.id} {...project} />
        ))}
      </CampaignsGrid>
    );
  } else if (campaignStatus === 'failed') {
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

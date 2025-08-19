import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CampaignCard from './CampaignCard';
import { fetchCampaigns } from '../store/features/campaigns/campaignsSlice';

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PopularProjectsSection = () => {
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
      <ProjectsGrid>
        {campaigns.map((project) => (
          <CampaignCard key={project.id} {...project} />
        ))}
      </ProjectsGrid>
    );
  } else if (campaignStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <SectionWrapper>
      <SectionTitle>Popular at FundMyTuition</SectionTitle>
      {content}
    </SectionWrapper>
  );
};

export default PopularProjectsSection;

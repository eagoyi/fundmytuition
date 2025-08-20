import React, { useEffect } from 'react';
import styled from 'styled-components';
import CampaignCard from './CampaignCard';
import { fetchCampaigns } from '../store/features/campaigns/campaignsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

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

const PopularProjectsSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: campaigns, status, error } = useAppSelector((state) => state.campaigns);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampaigns());
    }
  }, [status, dispatch]);

  // Replace dummy data with data that uses real image paths
  const projectsWithRealImages = campaigns.map((project, index) => ({
      ...project,
      image: `/assets/images/popular-${index + 1}.jpg`
  }));

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ProjectsGrid>
        {projectsWithRealImages.map((project) => (
          <CampaignCard key={project.id} {...project} />
        ))}
      </ProjectsGrid>
    );
  } else if (status === 'failed') {
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

import React, { useEffect } from 'react';
import styled from 'styled-components';
import CampaignCard from './CampaignCard';
import { fetchCampaigns } from '../store/features/campaigns/campaignsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Container, Row, Col } from './Grid';

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const PopularProjectsSection: React.FC = () => {
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
      <Row>
        {campaigns.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4} lg={3}>
            <CampaignCard {...project} />
          </Col>
        ))}
      </Row>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <SectionWrapper>
        <Container>
            <SectionTitle>Popular at FundMyTuition</SectionTitle>
            {content}
        </Container>
    </SectionWrapper>
  );
};

export default PopularProjectsSection;

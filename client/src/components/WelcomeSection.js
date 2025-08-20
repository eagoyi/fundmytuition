import React from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaUsers, FaFistRaised } from 'react-icons/fa';

const WelcomeSectionWrapper = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #6c757d;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const FeatureItem = styled.li`
  max-width: 300px;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureTitle = styled.strong`
  display: block;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const WelcomeSection = () => {
  return (
    <WelcomeSectionWrapper>
      <SectionTitle>Why FundMyTuition</SectionTitle>
      <SectionSubtitle>
        No Competing Cause, <br />
        Education is our one and only Priority
      </SectionSubtitle>
      <FeaturesList>
        <FeatureItem>
          <FeatureIcon><FaLightbulb /></FeatureIcon>
          <FeatureTitle>Equal Opportunity</FeatureTitle>
          <p>We are giving everyone an equal opportunity to reach for their goals, to activate and utilize their talent and illuminate the univers.</p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaUsers /></FeatureIcon>
          <FeatureTitle>Power in Teaming</FeatureTitle>
          <p>We encourage teamwork, take your funding seriousely organize a team, plan your campaign strategy and there would be know stopping you. Trust us when we say there is power in teaming</p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaFistRaised /></FeatureIcon>
          <FeatureTitle>Talent Hub</FeatureTitle>
          <p>At FunMyTuition organizations can recruit and fund geniuses young and fresh. Fund students in exchange for their committed service for atleast 4 years</p>
        </FeatureItem>
      </FeaturesList>
    </WelcomeSectionWrapper>
  );
};

export default WelcomeSection;

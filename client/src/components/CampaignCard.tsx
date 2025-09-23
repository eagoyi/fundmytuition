import React from 'react';
import styled from 'styled-components';
import { Campaign } from '../data/campaigns';

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.motion.transition};
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 5px;
  margin: 1rem 0;

  div {
    width: ${props => props.progress}%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }
`;

const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const CampaignCard: React.FC<Campaign> = ({
  image,
  title,
  description,
  goal,
  funded,
  backers,
  daysLeft,
}) => {
  const progress = (funded / goal) * 100;

  return (
    <CardWrapper>
      <ProjectImage src={image} alt={title} />
      <CardContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProgressBar progress={progress}>
          <div></div>
        </ProgressBar>
        <Stats>
          <li><strong>{daysLeft}</strong> Days Left</li>
          <li><strong>{backers}</strong> Backers</li>
          <li><strong>${funded.toLocaleString()}</strong> Funded</li>
        </Stats>
      </CardContent>
    </CardWrapper>
  );
};

export default CampaignCard;

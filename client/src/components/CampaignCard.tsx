import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  overflow: hidden;
  max-width: 300px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h5`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 10px;
  background: #e9ecef;
  border-radius: 5px;
  margin: 1rem 0;

  div {
    width: ${props => props.progress}%;
    height: 100%;
    background: #28a745;
    border-radius: 5px;
  }
`;

const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

interface Props {
  image: string;
  title: string;
  description: string;
  progress: number;
  daysLeft: number;
  backers: number;
  funded: number;
}

const CampaignCard: React.FC<Props> = ({
  image,
  title,
  description,
  progress,
  daysLeft,
  backers,
  funded,
}) => {
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
          <li><strong>${funded}</strong> Funded</li>
        </Stats>
      </CardContent>
    </CardWrapper>
  );
};

export default CampaignCard;

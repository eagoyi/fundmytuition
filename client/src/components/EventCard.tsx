import React from 'react';
import styled from 'styled-components';
import { Event } from '../data/events';

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.motion.transition};
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const EventTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
`;

const EventDate = styled.p`
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 1rem;
`

const EventCard: React.FC<Event> = ({ title, description, date }) => {
  return (
    <CardWrapper>
      <EventTitle>{title}</EventTitle>
      <EventDescription>{description}</EventDescription>
      <EventDate>Date: {new Date(date).toLocaleDateString()}</EventDate>
    </CardWrapper>
  );
};

export default EventCard;

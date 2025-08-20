import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: ${props => props.color || '#f8f9fa'};
  padding: 2rem;
  color: #fff;
  border-radius: 5px;
`;

const EventTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
`;

const EventCard = ({ title, description, color }) => {
  // Countdown logic will be added later
  return (
    <CardWrapper color={color}>
      <EventTitle>{title}</EventTitle>
      <EventDescription>{description}</EventDescription>
      {/* Countdown timer will go here */}
    </CardWrapper>
  );
};

export default EventCard;

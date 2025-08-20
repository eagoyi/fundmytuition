import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';

const SectionWrapper = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const dummyEvents = [
  {
    title: 'Annual Education Conference',
    description: 'Keeping you updated is as good as education, of what good are we if we cannot bring the most recent update in education to you, we cannot do that without you.',
    color: '#34cc99',
  },
  {
    title: 'To Celebrate World Education Day',
    description: 'Every experience counts and every action contributes to creating the awareness we so badly need at the moment.',
    color: '#f2d031',
  },
  {
    title: 'Annual Award/Fundraising Dinner',
    description: 'After an eventful year, recognizing the top ranked and dedicated donors/staff and at the same time making sure we are ready for the coming year is not such a bad idea.',
    color: '#ef6342',
  },
];

const EventsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Upcoming Events</SectionTitle>
      <EventsGrid>
        {dummyEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </EventsGrid>
    </SectionWrapper>
  );
};

export default EventsSection;

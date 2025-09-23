import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import { events } from '../data/events';
import { Container, Row, Col } from './Grid';

const SectionWrapper = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const EventsSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle>Upcoming Events</SectionTitle>
        <Row>
          {events.map((event, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <EventCard {...event} />
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default EventsSection;

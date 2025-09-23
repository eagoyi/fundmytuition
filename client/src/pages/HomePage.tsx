import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import PopularProjectsSection from '../components/PopularProjectsSection';
import HeroSlider from '../components/HeroSlider';
import EventsSection from '../components/EventsSection';
import CallToActionSection from '../components/CallToActionSection';
import { Container } from '../components/Grid';

const HomePage: React.FC = () => {
  return (
    <Container>
      <HeroSlider />
      <WelcomeSection />
      <PopularProjectsSection />
      <EventsSection />
      <CallToActionSection />
    </Container>
  );
};

export default HomePage;

import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import PopularProjectsSection from '../components/PopularProjectsSection';
import HeroSlider from '../components/HeroSlider';
import EventsSection from '../components/EventsSection';
import CallToActionSection from '../components/CallToActionSection';

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <WelcomeSection />
      <PopularProjectsSection />
      <EventsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;

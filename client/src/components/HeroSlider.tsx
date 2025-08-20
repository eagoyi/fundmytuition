import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SliderWrapper = styled.div`
  .carousel .slide {
    background: #f0f0f0;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SlideContent = styled.div`
  text-align: center;
  color: #333;
  background: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  border-radius: 5px;
`;

const HeroSlider: React.FC = () => {
  return (
    <SliderWrapper>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="/assets/images/slide-1.jpg" alt="slide 1" />
          <SlideContent className="legend">
            <h2>TUITION CAMPAIGN</h2>
            <h3>STUDENT</h3>
            <p>No doubts, people are born talented but you cannot overemphasize the fact that education beats talent...</p>
          </SlideContent>
        </div>
        <div>
          <img src="/assets/images/slide-2.jpg" alt="slide 2" />
          <SlideContent className="legend">
            <h2>PROJECT CAMPAIGN</h2>
            <h3>EDUCATIONALIST</h3>
            <p>We are on a mission to make education great again, to ensure continuous innovation...</p>
          </SlideContent>
        </div>
        <div>
          <img src="/assets/images/slide-3.jpg" alt="slide 3" />
          <SlideContent className="legend">
            <h2>EVENTS</h2>
            <h3>EDUCATIONAL EVENTS</h3>
            <p>We must stay up to date on the educational system by being present for as many educational events as possible...</p>
          </SlideContent>
        </div>
      </Carousel>
    </SliderWrapper>
  );
};

export default HeroSlider;

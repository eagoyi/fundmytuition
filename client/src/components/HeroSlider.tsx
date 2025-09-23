import React from 'react';
import styled, { keyframes } from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const fadeIn = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

const SliderWrapper = styled.div`
  position: relative;

  .carousel .slide {
    background: #f0f0f0;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel .slide img {
      height: 500px;
      object-fit: cover;
  }

  .carousel .legend {
      animation: ${fadeIn} 1s;
  }
`;

const SlideContent = styled.div`
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 5px;
  max-width: 600px;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
`;

const HeroSlider: React.FC = () => {
  return (
    <SliderWrapper>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        transitionTime={1000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <Arrow onClick={onClickHandler} style={{ left: 15 }}>
                    {'<'}
                </Arrow>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <Arrow onClick={onClickHandler} style={{ right: 15 }}>
                    {'>'}
                </Arrow>
            )
        }
      >
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

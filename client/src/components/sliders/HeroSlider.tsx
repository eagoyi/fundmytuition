import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};

  .carousel-wrapper {
    max-height: 500px;
  }

  .carousel {
    max-height: 500px;
  }
`;

const SlideContent = styled.div`
  position: relative;
  max-height: 500px;
  background: linear-gradient(135deg, #224390 0%, #1a3366 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 40px 20px;
  }
`;

const SlideText = styled.div`
  max-width: 600px;
  animation: slideInUp 0.8s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    color: white;
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 20px;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 32px;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
    margin-bottom: 30px;
    line-height: 1.6;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.lg};
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all ${(props) => props.theme.transitions.base};
  margin: 0 10px;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
    margin: 10px 0;
  }
`;

const CustomArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &.next {
    right: 20px;
  }

  &.prev {
    left: 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
}

interface HeroSliderProps {
  slides?: Slide[];
}

const defaultSlides: Slide[] = [
  {
    title: 'Empower Education, Fund Dreams',
    description: 'Join thousands of students and creators raising funds for their educational goals and innovative projects.',
    buttonText: 'Start a Campaign',
    buttonLink: '/student-form',
  },
  {
    title: 'Support Education, Change Lives',
    description: 'Help aspiring students and educators achieve their dreams through crowdfunding. Every contribution makes a difference.',
    buttonText: 'Explore Campaigns',
    buttonLink: '/campaigns',
  },
  {
    title: 'Make Your Impact',
    description: 'Be part of a community that believes in the power of education. Volunteer or donate to support those in need.',
    buttonText: 'Become a Supporter',
    buttonLink: '/volunteer',
  },
];

const HeroSlider: React.FC<HeroSliderProps> = ({ slides = defaultSlides }) => {
  return (
    <SliderWrapper>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        transitionTime={800}
        stopOnHover={true}
        renderArrowPrev={(clickHandler) => (
          <CustomArrow className="prev" onClick={clickHandler}>
            ‹
          </CustomArrow>
        )}
        renderArrowNext={(clickHandler) => (
          <CustomArrow className="next" onClick={clickHandler}>
            ›
          </CustomArrow>
        )}
      >
        {slides.map((slide, index) => (
          <SlideContent key={index}>
            <SlideText>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <div>
                <CTAButton to={slide.buttonLink}>{slide.buttonText}</CTAButton>
              </div>
            </SlideText>
          </SlideContent>
        ))}
      </Carousel>
    </SliderWrapper>
  );
};

export default HeroSlider;

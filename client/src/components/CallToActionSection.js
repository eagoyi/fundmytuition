import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background: #f2d031;
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
`;

const CallToActionSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Have an Edu-Project in Need of Funding?</SectionTitle>
      <StyledLink to="/start">Start Campaign</StyledLink>
    </SectionWrapper>
  );
};

export default CallToActionSection;

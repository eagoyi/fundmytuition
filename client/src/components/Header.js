import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>FundMyTuition</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/start">Start</a>
        <a href="/campaigns">Explore Campaigns</a>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;

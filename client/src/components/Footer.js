import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 FundMyTuition. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;

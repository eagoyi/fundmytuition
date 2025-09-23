import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainContent = styled.main`
  flex: 1;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;

import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Grid';

const PageWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const NotFoundPage: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <PageTitle>404 - Not Found</PageTitle>
        <p>The page you are looking for does not exist.</p>
      </Container>
    </PageWrapper>
  );
};

export default NotFoundPage;

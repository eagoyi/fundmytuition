import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Grid';

const PageWrapper = styled.div`
  padding: 4rem 0;
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProfilePage: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <PageTitle>Profile</PageTitle>
        <p>This page is under construction.</p>
      </Container>
    </PageWrapper>
  );
};

export default ProfilePage;

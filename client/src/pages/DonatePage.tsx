import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Content = styled.div`
  text-align: center;
  padding: 40px;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }
`;

const DonatePage: React.FC = () => {
  return (
    <Container>
      <PageTitle>Make a Donation</PageTitle>
      <Content>
        <h2>Support Education Today</h2>
        <p>Your donation can help students achieve their educational dreams. Browse campaigns and make a difference.</p>
      </Content>
    </Container>
  );
};

export default DonatePage;

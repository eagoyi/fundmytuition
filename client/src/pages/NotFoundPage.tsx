import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 120px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 30px;
  font-size: 16px;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Description>Sorry, the page you're looking for doesn't exist. Let's get you back on track!</Description>
      <HomeLink to="/">Go Home</HomeLink>
    </Container>
  );
};

export default NotFoundPage;

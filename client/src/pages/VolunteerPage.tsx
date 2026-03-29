import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin: 30px 0 15px;
  }

  p {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.6;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  margin: 20px 0;

  &:hover {
    opacity: 0.9;
  }
`;

const VolunteerPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>Become a Volunteer</PageTitle>
      <Content>
        <h2>Make a Difference</h2>
        <p>
          Join our community of volunteers who are passionate about education. Help students achieve their dreams by
          offering support, mentorship, or financial assistance.
        </p>

        <h2>Ways to Volunteer</h2>
        <p>
          Whether you want to mentor students, review campaigns, or help us improve the platform, there are many ways
          to contribute to our mission.
        </p>

        <CTAButton to="/volunteer-reg">Sign Up as a Volunteer</CTAButton>
      </Content>
    </Container>
  );
};

export default VolunteerPage;

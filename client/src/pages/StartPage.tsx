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

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const OptionCard = styled.div`
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 30px;
  text-align: center;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  h3 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const StartPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>Get Started with FundMyTuition</PageTitle>

      <OptionsGrid>
        <OptionCard>
          <h3>I want to fundraise</h3>
          <p>Create a campaign to raise funds for your education or educational project.</p>
          <Button to="/student-form">Create Campaign</Button>
        </OptionCard>

        <OptionCard>
          <h3>I want to support others</h3>
          <p>Join our volunteer community and help support students pursuing their educational goals.</p>
          <Button to="/volunteer-reg">Become a Volunteer</Button>
        </OptionCard>

        <OptionCard>
          <h3>I want to donate</h3>
          <p>Support educational initiatives by making a contribution to campaigns that inspire you.</p>
          <Button to="/campaigns">Browse & Donate</Button>
        </OptionCard>
      </OptionsGrid>
    </Container>
  );
};

export default StartPage;

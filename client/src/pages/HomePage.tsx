import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeroSlider from '../components/sliders/HeroSlider';
import { Link } from 'react-router-dom';
import { useCampaigns } from '../hooks/useCampaigns';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 60px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 40px 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 25px;
  text-align: center;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 15px;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const CTASection = styled(Section)`
  background: linear-gradient(135deg, #224390 0%, #1a3366 100%);
  color: white;
  text-align: center;
  border: none;

  h2 {
    color: white;
    margin-bottom: 20px;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const HomePage: React.FC = () => {
  const { filteredCampaigns, fetchCampaigns, loading } = useCampaigns();

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <>
      <HeroSlider />

      <Section>
        <Container>
          <SectionTitle>How It Works</SectionTitle>
          <GridContainer>
            <Card>
              <h3>01. Create</h3>
              <p>Start a campaign and share your educational goal or project with our community of supporters.</p>
              <Button to="/student-form">Create Campaign</Button>
            </Card>
            <Card>
              <h3>02. Share</h3>
              <p>Share your campaign on social media and reach out to friends, family, and supporters who believe in your mission.</p>
            </Card>
            <Card>
              <h3>03. Achieve</h3>
              <p>Once you reach your funding goal, withdraw funds and start turning your educational dreams into reality.</p>
            </Card>
          </GridContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Popular Campaigns</SectionTitle>
          <GridContainer>
            {loading ? (
              <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>Loading campaigns...</p>
            ) : filteredCampaigns && filteredCampaigns.length > 0 ? (
              filteredCampaigns.slice(0, 3).map((campaign) => (
                <Card key={campaign.id}>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description?.substring(0, 60)}...</p>
                  <p style={{ fontSize: '12px', color: '#999' }}>
                    ${campaign.fundedAmount?.toLocaleString() || 0} of ${campaign.fundingGoal?.toLocaleString() || 0} raised
                  </p>
                  <Button to={`/campaign/${campaign.id}`}>View Campaign</Button>
                </Card>
              ))
            ) : (
              <>
                <Card>
                  <h3>Medical School Fund</h3>
                  <p>Helping students pursue careers in medicine</p>
                  <p style={{ fontSize: '12px', color: '#999' }}>$5,200 of $10,000 raised</p>
                  <Button to="/campaigns">View Campaign</Button>
                </Card>
                <Card>
                  <h3>Tech Scholarship Fund</h3>
                  <p>Supporting underprivileged students in tech</p>
                  <p style={{ fontSize: '12px', color: '#999' }}>$8,500 of $15,000 raised</p>
                  <Button to="/campaigns">View Campaign</Button>
                </Card>
                <Card>
                  <h3>Research Project Fund</h3>
                  <p>Funding innovative research in education</p>
                  <p style={{ fontSize: '12px', color: '#999' }}>$3,200 of $5,000 raised</p>
                  <Button to="/campaigns">View Campaign</Button>
                </Card>
              </>
            )}
          </GridContainer>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <h2>Ready to Make a Difference?</h2>
          <p>Whether you want to fundraise for your education or support others, FundMyTuition is here to help.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/student-form" style={{ backgroundColor: 'white', color: '#224390' }}>
              Start Fundraising
            </Button>
            <Button to="/campaigns" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid white' }}>
              Explore Campaigns
            </Button>
          </div>
        </Container>
      </CTASection>
    </>
  );
};

export default HomePage;

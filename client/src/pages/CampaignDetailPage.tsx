import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCampaigns } from '../hooks/useCampaigns';
import { FaShareAlt, FaHeart, FaCheckCircle } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const BackLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 20px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    margin-bottom: 15px;
  }

  .meta {
    display: flex;
    gap: 20px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const CampaignImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #224390, #1a3366);
  border-radius: ${(props) => props.theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 30px;
  font-size: 18px;
`;

const Description = styled.div`
  h2 {
    margin: 30px 0 15px;
    font-size: 20px;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.8;
  }
`;

const Sidebar = styled.div``;

const FundingCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 25px;
  margin-bottom: 20px;
  position: sticky;
  top: 20px;
`;

const FundingGoal = styled.div`
  margin-bottom: 20px;

  .amount {
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 5px;
  }

  .goal {
    font-size: 14px;
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;

  div {
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    width: ${(props) => props.width || '0'}%;
    transition: width 0.3s ease;
  }
`;

const ProgressText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: 20px;
`;

const DonateButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const ShareButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const CreatorInfo = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  h4 {
    margin-bottom: 10px;
    font-size: 14px;
  }

  p {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const CampaignDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedCampaign, getCampaignById, loading } = useCampaigns();

  useEffect(() => {
    if (id) {
      getCampaignById(id);
    }
  }, [id]);

  // Mock data if API call fails
  const campaign = selectedCampaign || {
    id: id,
    title: 'Medical School Fund',
    description:
      'Help me achieve my dream of becoming a doctor. I am a dedicated student who is passionate about medicine and wants to pursue my career in this field.',
    fundedAmount: 5200,
    fundingGoal: 10000,
    creator: 'John Doe',
    category: 'Education',
  };

  const progressPercentage = (campaign.fundedAmount / campaign.fundingGoal) * 100;

  if (loading) {
    return (
      <Container>
        <p>Loading campaign...</p>
      </Container>
    );
  }

  return (
    <Container>
      <BackLink to="/campaigns">&larr; Back to Campaigns</BackLink>

      <Header>
        <h1>{campaign.title}</h1>
        <div className="meta">
          <span>{campaign.category || 'Education'}</span>
          <span>by {campaign.creator || 'Unknown Creator'}</span>
        </div>
      </Header>

      <Grid>
        <MainContent>
          <CampaignImage>Campaign Image (Upload your image here)</CampaignImage>

          <Description>
            <h2>About this Campaign</h2>
            <p>{campaign.description}</p>

            <h2>Campaign Story</h2>
            <p>
              This is where the detailed story about the campaign goes. You can include information about your background,
              your goals, and how the funds will be used. This section helps supporters understand your mission better.
            </p>

            <h2>How the Funds Will Be Used</h2>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <FaCheckCircle style={{ marginRight: '8px' }} /> Tuition fees
              </li>
              <li style={{ marginBottom: '10px' }}>
                <FaCheckCircle style={{ marginRight: '8px' }} /> Books and study materials
              </li>
              <li style={{ marginBottom: '10px' }}>
                <FaCheckCircle style={{ marginRight: '8px' }} /> Living expenses
              </li>
            </ul>
          </Description>
        </MainContent>

        <Sidebar>
          <FundingCard>
            <FundingGoal>
              <div className="amount">${campaign.fundedAmount?.toLocaleString() || 0}</div>
              <div className="goal">of ${campaign.fundingGoal?.toLocaleString() || 0} goal</div>
            </FundingGoal>

            <ProgressBar width={progressPercentage}>
              <div></div>
            </ProgressBar>

            <ProgressText>
              {Math.round(progressPercentage)}% funded • {Math.floor(Math.random() * 100) + 50} supporters
            </ProgressText>

            <DonateButton>Donate Now</DonateButton>
            <ShareButton>
              <FaShareAlt /> Share
            </ShareButton>

            <CreatorInfo>
              <h4>Created by</h4>
              <p>{campaign.creator || 'John Doe'}</p>
              <p style={{ fontSize: '12px', color: '#999', marginBottom: '0' }}>Joined 2 years ago</p>
            </CreatorInfo>
          </FundingCard>
        </Sidebar>
      </Grid>
    </Container>
  );
};

export default CampaignDetailPage;

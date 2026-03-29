import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageTitle = styled.h1`
  margin-bottom: 40px;
`;

const ProfileCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 30px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
  }
`;

const StudentProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) {
    return (
      <Container>
        <PageTitle>Student Profile</PageTitle>
        <ProfileCard>
          <p>Please log in to view your profile.</p>
          <button onClick={() => navigate('/')}>Go Home</button>
        </ProfileCard>
      </Container>
    );
  }

  return (
    <Container>
      <PageTitle>Student Profile</PageTitle>
      <ProfileCard>
        <h2>Welcome, {user?.name}!</h2>
        <p>Email: {user?.email}</p>
        <p>This is your student profile page. You can manage your campaigns here.</p>
      </ProfileCard>
    </Container>
  );
};

export default StudentProfilePage;

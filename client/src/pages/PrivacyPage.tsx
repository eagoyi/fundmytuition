import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Content = styled.div`
  h2 {
    margin: 30px 0 15px;
    font-size: 20px;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.6;
    font-size: 14px;
  }

  ul {
    margin: 15px 0 15px 20px;
  }

  li {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const PrivacyPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>Privacy Policy</PageTitle>
      <Content>
        <h2>Introduction</h2>
        <p>
          FundMyTuition (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website. This page informs you of our policies
          regarding the collection, use, and disclosure of personal data when you use our Service.
        </p>

        <h2>Information Collection and Use</h2>
        <p>We collect several different types of information for various purposes to provide and improve our Service.</p>

        <ul>
          <li>Personal Data: Email address, name, phone number, address</li>
          <li>Usage Data: Browser type, IP address, pages visited, time and date of visits</li>
          <li>Device Data: Device type, operating system, device identifiers</li>
        </ul>

        <h2>Security</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet or
          electronic storage is 100% secure.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at support@fundmytuition.com</p>
      </Content>
    </Container>
  );
};

export default PrivacyPage;

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

const FAQItem = styled.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    font-size: 14px;
  }
`;

const FAQsPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>Frequently Asked Questions</PageTitle>

      <FAQItem>
        <h3>How do I create a campaign?</h3>
        <p>Click on &quot;Start&quot; in the navigation and select &quot;Create Campaign&quot; to get started with fundraising.</p>
      </FAQItem>

      <FAQItem>
        <h3>Is there a fee for using FundMyTuition?</h3>
        <p>We charge a small platform fee to support our operations. Details will be provided during campaign creation.</p>
      </FAQItem>

      <FAQItem>
        <h3>How are funds transferred?</h3>
        <p>Once your campaign reaches its goal, funds are transferred to your account within 5-7 business days.</p>
      </FAQItem>

      <FAQItem>
        <h3>Can I donate anonymously?</h3>
        <p>Yes, you can choose to keep your donation anonymous when contributing to a campaign.</p>
      </FAQItem>
    </Container>
  );
};

export default FAQsPage;

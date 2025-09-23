import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../components/Grid';

const PageWrapper = styled.div`
  padding: 4rem 0;
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const ContactPage: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <PageTitle>Contact Us</PageTitle>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Need Help? first check out our <a href="/faqs">FAQs</a>. If you couldn't find your answers kindly send an email to help@fundmytuition.org or contact us with your questions using the form below and we will get back to you in no time. Thank you.
            </p>
            <FormWrapper>
              <form>
                <Row>
                  <Col xs={12} sm={6}>
                    <input type="text" placeholder="Full Name" required minLength={2} />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="email" placeholder="Email" required pattern=".+@.+\..+" title="Please enter a valid email address" />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="tel" placeholder="Contact Number" pattern="[0-9]{10,}" title="Please enter a valid phone number" />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="text" placeholder="Subject" required />
                  </Col>
                  <Col xs={12}>
                    <textarea placeholder="Your Message" required minLength={10}></textarea>
                  </Col>
                  <Col xs={12}>
                    <button type="submit">Send</button>
                  </Col>
                </Row>
              </form>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default ContactPage;

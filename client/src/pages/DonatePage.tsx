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

const DonatePage: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <PageTitle>Donate</PageTitle>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <FormWrapper>
              <form>
                <Row>
                  <Col xs={12}>
                    <input type="number" placeholder="Donation Amount" required min="1" />
                  </Col>
                  <Col xs={12}>
                    <input type="text" placeholder="Card Number" autoComplete="off" required pattern="[0-9]{13,16}" title="Please enter a valid card number" />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="text" placeholder="Expiry Date (MM/YY)" autoComplete="off" required pattern="(0[1-9]|1[0-2])\/?([0-9]{2})" title="Please enter a valid expiry date (MM/YY)" />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="text" placeholder="CVC" autoComplete="off" required pattern="[0-9]{3,4}" title="Please enter a valid CVC" />
                  </Col>
                  <Col xs={12}>
                    <button type="submit">Donate Now</button>
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

export default DonatePage;

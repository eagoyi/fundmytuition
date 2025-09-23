import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../components/Grid';

const PageWrapper = styled.div`
  padding: 4rem 0;
`;

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

interface FormStepProps {
  active: boolean;
}

const FormStep = styled.div<FormStepProps>`
  display: ${props => (props.active ? 'block' : 'none')};
`;

const StartPage: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <FormWrapper>
              <h2>Start Your Campaign</h2>
              <FormStep active={step === 1}>
                <h3>Basic Information</h3>
                <input type="text" placeholder="Fundraising Title" required minLength={5} />
                <input type="number" placeholder="Amount You Want To Raise" required min="1" />
                <input type="text" placeholder="Tagline" required />
                <input type="date" placeholder="Deadline" required />
                <button onClick={() => setStep(2)}>Next</button>
              </FormStep>
              <FormStep active={step === 2}>
                <h3>Social Media</h3>
                {/* Form fields for step 2 */}
                <button onClick={() => setStep(1)}>Back</button>
                <button onClick={() => setStep(3)}>Next</button>
              </FormStep>
              <FormStep active={step === 3}>
                <h3>Add Perks</h3>
                {/* Form fields for step 3 */}
                <button onClick={() => setStep(2)}>Back</button>
                <button onClick={() => setStep(4)}>Next</button>
              </FormStep>
              <FormStep active={step === 4}>
                <h3>Add Costs</h3>
                {/* Form fields for step 4 */}
                <button onClick={() => setStep(3)}>Back</button>
                <button onClick={() => setStep(5)}>Next</button>
              </FormStep>
              <FormStep active={step === 5}>
                <h3>Add Images or Video</h3>
                {/* Form fields for step 5 */}
                <button onClick={() => setStep(4)}>Back</button>
                <button type="submit">Submit</button>
              </FormStep>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default StartPage;

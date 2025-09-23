import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { registerUser } from '../store/features/auth/authSlice';
import styled from 'styled-components';
import { Container, Row, Col } from '../components/Grid';
import { RootState } from '../store/store';

const PageWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[600]};
  }
`;

const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.danger};
`;

const RegistrationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ email, password }));
  };

  return (
    <PageWrapper>
        <Container>
            <Row>
                <Col xs={12} md={{span: 6, offset: 3}}>
                    <FormWrapper onSubmit={handleSubmit}>
                        <FormTitle>Register</FormTitle>
                        <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            pattern=".+@.+\..+"
                            title="Please enter a valid email address"
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8}
                            autoComplete="new-password"
                        />
                        </FormGroup>
                        <Button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Registering...' : 'Register'}
                        </Button>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                    </FormWrapper>
                </Col>
            </Row>
        </Container>
    </PageWrapper>
  );
};

export default RegistrationPage;

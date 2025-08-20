import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/features/auth/authSlice';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #e9ecef;
  border-radius: 5px;
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
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background: #6c757d;
  }
`;

const ErrorMessage = styled.p`
    color: red;
`;

const SignInPage = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <PageWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <FormTitle>Sign In</FormTitle>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          />
        </FormGroup>
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Signing In...' : 'Sign In'}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormWrapper>
    </PageWrapper>
  );
};

export default SignInPage;

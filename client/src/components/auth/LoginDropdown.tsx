import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGoogle } from 'react-icons/fa';

const DropdownWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  padding: 1rem;
  z-index: 100;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const LoginDropdown: React.FC = () => {
    return (
        <DropdownWrapper>
            <h3>Login</h3>
            <SocialButton><FaLinkedin /> Login with LinkedIn</SocialButton>
            <SocialButton><FaGoogle /> Login with Google</SocialButton>
            <hr />
            <Form>
                <input type="email" placeholder="Your email" />
                <input type="password" placeholder="Your password" />
                <button type="submit">Log me in!</button>
            </Form>
        </DropdownWrapper>
    )
}

export default LoginDropdown;

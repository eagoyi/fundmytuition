import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLoginModalOpen, setLoggedIn, setUser } from '../../store/slices/authSlice';
import { FaTimes, FaLinkedin, FaGoogle } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 40px;
  max-width: 400px;
  width: 90%;
  box-shadow: ${(props) => props.theme.shadows.lg};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${(props) => props.theme.colors.textMuted};
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 14px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(34, 67, 144, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 14px;

  input {
    margin: 0;
    cursor: pointer;
  }

  label {
    cursor: pointer;
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 12px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.theme.colors.border};
  }

  span {
    padding: 0 10px;
  }
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: white;
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    background-color: #f5f5f5;
    border-color: ${(props) => props.theme.colors.primary};
  }

  svg {
    font-size: 16px;
  }

  &.linkedin {
    color: #0a66c2;
  }

  &.google {
    color: #ea4335;
  }
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.textMuted};
  margin: 20px 0 0;
`;

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.auth.loginModalOpen);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleClose = () => {
    dispatch(setLoginModalOpen(false));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Call authentication API
    console.log('[v0] Login attempt:', { email, password, rememberMe });

    // Mock successful login
    dispatch(setUser({ email, name: email.split('@')[0] }));
    dispatch(setLoggedIn(true));
    handleClose();
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log('[v0] Social login:', provider);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <FaTimes />
        </CloseButton>

        <Title>Login</Title>

        <SocialButton className="linkedin" onClick={() => handleSocialLogin('linkedin')}>
          <FaLinkedin /> Login with LinkedIn
        </SocialButton>

        <SocialButton className="google" onClick={() => handleSocialLogin('google')}>
          <FaGoogle /> Login with Google
        </SocialButton>

        <Divider>
          <span>OR</span>
        </Divider>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              aria-label="Email"
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0' }}>{errors.email}</p>}
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: '' });
              }}
              aria-label="Password"
            />
            {errors.password && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0' }}>{errors.password}</p>}
          </FormGroup>

          <RememberMe>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </RememberMe>

          <SubmitButton type="submit">Log me in!</SubmitButton>
        </form>

        <FooterText>
          Don&apos;t have an account? <a href="#register">Sign up</a>
        </FooterText>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginModal;

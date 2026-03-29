import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLoginModalOpen, setRegisterModalOpen } from '../../store/slices/authSlice';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

const HeaderWrapper = styled.header`
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  min-width: 200px;

  img {
    max-height: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 12px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-width: auto;
    font-size: 18px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background};
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    gap: 0;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    z-index: 999;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  ul {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      flex-direction: column;
      gap: 0;
    }

    li {
      a {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 600;
        display: block;
        padding: 10px 0;

        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          padding: 15px 20px;
          border-bottom: 1px solid ${(props) => props.theme.colors.border};
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    gap: 0;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    gap: 0;
    flex-direction: column;
    border-top: 1px solid ${(props) => props.theme.colors.border};
    padding-top: 10px;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  button {
    padding: 8px 16px;
    border-radius: ${(props) => props.theme.radius.md};
    font-weight: 600;
    font-size: 14px;
  }

  .login-btn {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: white;
    }
  }

  .register-btn {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding: 10px 20px;
    border-top: 1px solid ${(props) => props.theme.colors.border};

    button {
      flex: 1;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const loginModalOpen = useSelector((state: RootState) => state.auth.loginModalOpen);
  const registerModalOpen = useSelector((state: RootState) => state.auth.registerModalOpen);

  const handleLoginClick = () => {
    dispatch(setLoginModalOpen(true));
  };

  const handleRegisterClick = () => {
    dispatch(setRegisterModalOpen(true));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <Container>
          <Logo to="/">
            <img src="/assets/images/logo.png" alt="FundMyTuition" />
            <span>FundMyTuition</span>
          </Logo>

          <NavContainer isOpen={mobileMenuOpen}>
            <Nav>
              <ul>
                <li>
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMobileMenu}>
                    About FMT
                  </Link>
                </li>
                <li>
                  <Link to="/start" onClick={closeMobileMenu}>
                    Start
                  </Link>
                </li>
                <li>
                  <Link to="/campaigns" onClick={closeMobileMenu}>
                    Explore Campaigns
                  </Link>
                </li>
              </ul>
            </Nav>

            <HeaderRight>
              {!isLoggedIn ? (
                <AuthButtons>
                  <button className="login-btn" onClick={handleLoginClick}>
                    Login
                  </button>
                  <button className="register-btn" onClick={handleRegisterClick}>
                    Join
                  </button>
                </AuthButtons>
              ) : (
                <AuthButtons>
                  <Link to="/student-profile">Profile</Link>
                </AuthButtons>
              )}
            </HeaderRight>
          </NavContainer>

          <MenuToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>
        </Container>
      </HeaderWrapper>

      {loginModalOpen && <LoginModal />}
      {registerModalOpen && <RegisterModal />}
    </>
  );
};

export default Header;

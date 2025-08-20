import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from './auth/SearchBar';
import LoginDropdown from './auth/LoginDropdown';
import SignupDropdown from './auth/SignupDropdown';


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  position: relative;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 1rem;
    z-index: 10;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 0.5rem;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;


const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
    setSignupOpen(false);
  }

  const toggleSignup = () => {
    setSignupOpen(!isSignupOpen);
    setLoginOpen(false);
  }

  return (
    <HeaderWrapper>
      <Logo to="/">
        <img src="/assets/images/logo.png" alt="FundMyTuition" />
      </Logo>
      <Nav $isOpen={isMenuOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About FMT</NavLink>
        <NavLink to="/start">Start</NavLink>
        <NavLink to="/campaigns">Explore Campaigns</NavLink>
      </Nav>
      <HeaderActions>
        <ActionButton onClick={() => setSearchOpen(!isSearchOpen)}><FaSearch /></ActionButton>
        {isSearchOpen && <SearchBar />}
        <ActionButton onClick={toggleLogin}>Login</ActionButton>
        {isLoginOpen && <LoginDropdown />}
        <ActionButton onClick={toggleSignup}>Join</ActionButton>
        {isSignupOpen && <SignupDropdown />}
        <Link to="/donate" className="btn btn-primary">Donate</Link>
      </HeaderActions>
      <MobileMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>
    </HeaderWrapper>
  );
};

export default Header;

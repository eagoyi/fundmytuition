import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: 40px 0 20px;
  margin-top: 60px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h4 {
    margin-bottom: 15px;
    font-size: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;

      a {
        color: ${(props) => props.theme.colors.textMuted};
        font-size: 14px;

        &:hover {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    font-size: 18px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding-top: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 12px;

  p {
    margin: 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterSection>
            <h4>About FundMyTuition</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>For Seekers</h4>
            <ul>
              <li>
                <Link to="/student-form">Create Campaign</Link>
              </li>
              <li>
                <Link to="/campaigns">Browse Campaigns</Link>
              </li>
              <li>
                <Link to="/student-profile">Student Profile</Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>For Supporters</h4>
            <ul>
              <li>
                <Link to="/volunteer">Become a Volunteer</Link>
              </li>
              <li>
                <Link to="/donate">Donate Now</Link>
              </li>
              <li>
                <Link to="/campaigns">Find Projects</Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
            <SocialLinks>
              <a href="#" title="Facebook">
                <FaFacebook />
              </a>
              <a href="#" title="Twitter">
                <FaTwitter />
              </a>
              <a href="#" title="LinkedIn">
                <FaLinkedin />
              </a>
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>&copy; 2024 FundMyTuition. All rights reserved.</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

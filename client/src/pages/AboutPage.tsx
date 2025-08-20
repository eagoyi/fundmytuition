import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUser, FaKeyboard, FaAddressCard, FaBullhorn, FaBullseye, FaGraduationCap } from 'react-icons/fa';

const PageWrapper = styled.div`
  padding: 2rem 0;
`;

const Section = styled.section`
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const ProcessGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
`;

const ProcessItem = styled.div`
    text-align: center;
`;

const AboutPage: React.FC = () => {
    return (
        <PageWrapper>
            <Section>
                <Container>
                    <TwoColumnGrid>
                        <div>
                            <Image src="/assets/images/fees_increase.jpg" alt="Fees Increase" />
                        </div>
                        <div>
                            <h2>Collaborates With Institution's Fin-Aid or Bursary!</h2>
                            <p>FundMyTuition is a global public benefit Organization, focused on education, intended to run in major zonal regions across the globe. We will be liaising with Institution's Financial Aid or Bursary to ensure adequate/appropriate disbursement of fundings</p>
                            <p>Our mission is to reduce the limitations, anxiety and hassles students are faced with when sourcing for their tuition or paying off their student loans as well as aid quality and innovative Education/Research</p>
                            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                        </div>
                    </TwoColumnGrid>
                </Container>
            </Section>
            <Section>
                <Container>
                    <TwoColumnGrid>
                        <div>
                            <h2>Campaign For Financial Aid</h2>
                            <p>On FundMyTuition you can campaign for funding for any of the following: Tuition Fund, Student Loan payment, Research, Community Education, Edu-projects, Institution, Mentorship, skill acquisition or any activity that promotes educational innovation</p>
                            <p>You Need Funding for any of the listed? You can source for funds through fundmytuition. The below listed process can accelerate your campaign and goal attainment</p>
                            <Link to="/start" className="btn btn-primary">Start Campaign</Link>
                        </div>
                        <div>
                            <Image src="/assets/images/funder-3.jpg" alt="Funder" />
                        </div>
                    </TwoColumnGrid>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h2>FMT Campaign Process</h2>
                    <ProcessGrid>
                        <ProcessItem>
                            <FaUser size={40} />
                            <h3>Register on FMT</h3>
                            <p>Register on FundMyTuition platform and fill all required details</p>
                        </ProcessItem>
                        <ProcessItem>
                            <FaKeyboard size={40} />
                            <h3>Post Campaign</h3>
                            <p>Post should include needed Tuition amount and due date as appropriate</p>
                        </ProcessItem>
                        <ProcessItem>
                            <FaAddressCard size={40} />
                            <h3>Verification</h3>
                            <p>Submit all required document for verification on FMT</p>
                        </ProcessItem>
                        <ProcessItem>
                            <FaBullhorn size={40} />
                            <h3>Promote Campaign</h3>
                            <p>Use all available platform to promote your campaign</p>
                        </ProcessItem>
                        <ProcessItem>
                            <FaBullseye size={40} />
                            <h3>Attain Goal</h3>
                            <p>Make sure you set attainable funding goals, campaign in bits to attain goals faster</p>
                        </ProcessItem>
                        <ProcessItem>
                            <FaGraduationCap size={40} />
                            <h3>Pay Tuition</h3>
                            <p>Pay for tuition or any edu-funding requirement as appropriate</p>
                        </ProcessItem>
                    </ProcessGrid>
                </Container>
            </Section>
        </PageWrapper>
    )
}

export default AboutPage;

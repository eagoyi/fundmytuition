import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StartPage from './pages/StartPage';
import CampaignsPage from './pages/CampaignsPage';
import CampaignDetailPage from './pages/CampaignDetailPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import FAQsPage from './pages/FAQsPage';
import PrivacyPage from './pages/PrivacyPage';
import StudentProfilePage from './pages/StudentProfilePage';
import StudentFormPage from './pages/StudentFormPage';
import VolunteerPage from './pages/VolunteerPage';
import VolunteerRegPage from './pages/VolunteerRegPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/campaign/:id" element={<CampaignDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/student-profile" element={<StudentProfilePage />} />
            <Route path="/student-form" element={<StudentFormPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/volunteer-reg" element={<VolunteerRegPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

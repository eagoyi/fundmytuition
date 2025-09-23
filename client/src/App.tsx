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
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import FaqsPage from './pages/FaqsPage';
import FeesPage from './pages/FeesPage';
import PrivacyPage from './pages/PrivacyPage';
import ProfilePage from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
import RegistrationPage from './pages/RegistrationPage';
import StudentFormPage from './pages/StudentFormPage';
import StudentProfilePage from './pages/StudentProfilePage';
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/student-form" element={<StudentFormPage />} />
            <Route path="/student-profile" element={<StudentProfilePage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/volunteer-reg" element={<VolunteerRegPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

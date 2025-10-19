import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import About from './page/About/About';
import Service from './page/Service/Service';
import Contact from './page/Contact/Contact';
import ErrorPage from './page/error/ErrorPage';
import { useTranslation } from 'react-i18next';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);

  // URL-dan tilni aniqlash
  const pathParts = location.pathname.split('/');
  const currentLang = pathParts[1] || 'uz'; // Default til: uz

  useEffect(() => {
    if (['ru', 'uz', 'en'].includes(currentLang)) {
      i18n.changeLanguage(currentLang); // i18n tilini yangilash
    } else {
      // Noto'g'ri til bo'lsa, uz ga yo'naltirish
      const newPath = location.pathname ? `/uz${location.pathname}` : '/uz';
      navigate(newPath, { replace: true });
      i18n.changeLanguage('uz');
    }
    setInitialized(true);
  }, [currentLang, i18n, navigate, location.pathname]);

  if (!initialized) return null;

  return (
    <LanguageProvider lang={currentLang}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/service" element={<Service />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/server-error" element={<ErrorPage type="500" />} />
          <Route path="/:lang/forbidden" element={<ErrorPage type="403" />} />
          <Route path="/:lang/network-error" element={<ErrorPage type="network" />} />
          <Route path="*" element={<ErrorPage type="404" />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
};

// AppWrapper to wrap App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
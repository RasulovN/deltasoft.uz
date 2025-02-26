import React from 'react';
import {   ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About/About';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Service from './page/Service/Service';
import Contact from './page/Contact/Contact';
import Footer from './components/Footer';
import ServerError from './page/notfound/serverError';
import NotFound from './page/notfound/notfound';


const App = () => {
  const mode = useSelector((state) => state.theme.mode); // Access theme mode
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />


           {/* Server xatolik sahifasi */}
           <Route path="/500" element={<ServerError />} />
          
          {/* 404 sahifasi */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const pages = ['home', 'about', 'service', 'contact'];

function Navbar() {
  const { t, i18n } = useTranslation('global');
  const [anchorElNav, setAnchorElNav] = useState(null);
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const lang = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Tilni o'zgartirish
  const handleLanguageChange = (newLang) => {
    const pathParts = location.pathname.split('/');
    pathParts[1] = newLang; // Tilni yangilash
    const newPath = pathParts.join('/') || `/${newLang}`;
    navigate(newPath);
    i18n.changeLanguage(newLang); // i18n tilini yangilash
  };

  return (
    <AppBar
      position="fixed"
      color={mode === 'light' ? 'primary' : 'default'}
      sx={{ height: '50px', minHeight: '50px', justifyContent: 'center' }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ minHeight: '50px !important', height: '50px !important' }}
        >
          {/* Logo */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href={`/${lang}`}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'white',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            DELTASOFT CYBERNETIC
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${lang}/${page === 'home' ? '' : page}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {t(`navbar.${page}`)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
              >
                <Link
                  to={`/${lang}/${page === 'home' ? '' : page}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {t(`navbar.${page}`)}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Dark/Light Theme Toggle */}
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Typography
              sx={{ cursor: 'pointer' }}
              color="inherit"
              onClick={() => dispatch(toggleTheme())}
            >
              {mode === 'light' ? <FaSun /> : <FaMoon />}
            </Typography>
          </Box>

          {/* Language Switcher */}
          <Box sx={{ flexGrow: 0 }}>
            <select
              value={lang} // Joriy tilni kontekstdan olamiz
              onChange={(e) => handleLanguageChange(e.target.value)}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
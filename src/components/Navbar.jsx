import React, { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, Typography, Container, Button, FormControl, Select, MenuItem, IconButton, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const pages = ["home", "about", "service", "contact"];

function Navbar() {
  const { t } = useTranslation("global");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();


  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

//   const [seasonFont, setSeasonFont] = useState("");
//   const [seasonColor, setSeasonColor] = useState("");

//   // Fasllarga qarab fontlarni va ranglarni aniqlash
//   useEffect(() => {
//     const month = new Date().getMonth(); // 0 - Yanvar, 11 - Dekabr
//     let font = "";
//     let color = "";

//     if ([11].includes(month)) {
//       font = "IceKingdom"; // Qish oylarida
//       color = "aqua";
//     } else if ([0, 1].includes(month)) {
//       font = "CF Grand Nord"; // Bahor oylarida
//       color = "aqua";
//     }
//     else if ([2, 3, 4].includes(month)) {
//         font = "SpringEveryday"; // Bahor oylarida
//         color = "pink";
//      } else if ([5, 6, 7].includes(month)) {
//       font = "Oddy"; // Yoz oylarida
//       color = "gold";
//     } else {
//       font = "Serif"; // Kuz oylarida
//       color = "orange";
//     }

//     setSeasonFont(font);
//     setSeasonColor(color);
//   }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget); // Menyu ochiladi
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null); // Menyu yopiladi
  };

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value); // Dinamik til o'zgarishi
  };

  return (
    <AppBar  
        position="fixed"
        color={mode === "light" ? "primary" : "default"}
        sx={{ height: "50px", minHeight: "50px", justifyContent: "center" }} // Height kamaytirildi
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "50px !important", height: "50px !important" }}> 
          {/* Toolbar ham height bo‘yicha moslashtirildi */}
          
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "white",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            DELTASOFT CYBERNETIC
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page === "home" ? "" : page}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {t(`navbar.${page}`)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                <Link to={`/${page === "home" ? "" : page}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {t(`navbar.${page}`)}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Dark/Light Theme Toggle */}
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Typography
              sx={{ cursor: "pointer" }}
              color="inherit"
              onClick={() => dispatch(toggleTheme())}
            >
              {mode === "light" ? <FaSun /> : <FaMoon />}
            </Typography>
          </Box>

          {/* Language Switcher */}
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 20 }}>
              <Select
                value={i18next.language}
                onChange={handleLanguageChange}
                displayEmpty
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Borderni olib tashlash
                  },
                }}
              >
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="uz">UZ</MenuItem>
                <MenuItem value="ru">RU</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default Navbar;

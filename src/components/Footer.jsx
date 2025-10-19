import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram, FaGooglePlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('global');

  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', py: 3 }}>
      <Container maxWidth="lg">
        {/* Main Grid: All sections in a row */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" gutterBottom>
              {t('footer.companyName')}
            </Typography>
            <Typography variant="body2">
              {t('footer.companyDescription')}
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" gutterBottom>
              {t('footer.quickLinks')}
            </Typography>
            <Link href="/" color="inherit" display="block" variant="body2" sx={{ mb: 1 }}>
              {t('footer.home')}
            </Link>
            <Link href="/service" color="inherit" display="block" variant="body2" sx={{ mb: 1 }}>
              {t('footer.services')}
            </Link>
            <Link href="/about" color="inherit" display="block" variant="body2" sx={{ mb: 1 }}>
              {t('footer.about')}
            </Link>
            <Link href="/contact" color="inherit" display="block" variant="body2" sx={{ mb: 1 }}>
              {t('footer.contact')}
            </Link>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" gutterBottom>
              {t('footer.followUs')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" href="https://www.linkedin.com/company/deltasoftuz" target="_blank">
                <FaLinkedin />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com/deltasoft.uz" target="_blank">
                <FaInstagram />
              </IconButton>
              <IconButton color="inherit" href="https://www.facebook.com/deltasoftuz/" target="_blank">
                <FaFacebook />
              </IconButton>
              <IconButton color="inherit" href="https://t.me/deltasoft_uz" target="_blank">
                <FaTelegram />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" href="https://play.google.com/store/apps/details?id=com.deltasoft.deltasoftlcc&pcampaignid=web_share" target="_blank">
                <FaGooglePlay />
              </IconButton>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" gutterBottom>
              {t('footer.contactUs')}
            </Typography>
            <Typography variant="body2">
                    {t('footer.email')}:  
                <Link href="mailto:deltasoftuz@gmail.com" color="inherit" sx={{ cursor: "pointer", textDecoration: "none"}}> deltasoftuz@gmail.com  </Link>
            </Typography>
            <Typography variant="body2">
                    {t('footer.phone')}: 
                <Link href="tel:+998330033953" color="inherit" sx={{ cursor: "pointer", textDecoration: "none"}}> +998 33 003 3953  </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} DELTASOFT CYBERNETIC. {t('footer.allRightsReserved')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

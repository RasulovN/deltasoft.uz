import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('global');  // Using translation hook
  const mode = useSelector((state) => state.theme.mode);

  // Define background colors based on mode
  const backgroundColor = mode === 'light' ? '#f5f5f5' : '#333';  // Adjust the colors as needed
  
  return (
    <div className="home-container" style={{ backgroundColor }}>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className="hero-content">
                <Typography variant="h3" className="company-name" gutterBottom>
                  {t('homePage.welcome')}
                </Typography>
                <Typography variant="h5" className="hero-description" paragraph>
                  {t('homePage.description')}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  className="cta-button"
                  component={Link} 
                  to="/contact"
                >
                  {t('homePage.cta')}
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="hero-image">
                <img src="/delta.png" alt="DELTASOFT CYBERNETIC" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="about-us-section" style={{ backgroundColor }}>
        <Container>
          <Typography variant="h4" gutterBottom>{t('homePage.aboutTitle')}</Typography>
          <Typography variant="body1" paragraph>
            {t('homePage.aboutDescription')}
          </Typography>
        </Container>
      </section>

      {/* Our Services Section */}
        <section className="services-section" style={{ backgroundColor }}>
        <Container>
            <Typography variant="h4" className="section-heading" gutterBottom>{t('homePage.servicesTitle')}</Typography>
            <Grid container spacing={4}>
            {/* Repeat this block for each service card */}
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    alt={t('homePage.softwareDevelopment')}
                    height="200"
                    image="https://shorturl.at/DnDwS"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h4">{t('homePage.softwareDevelopment')}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    {t('homePage.softwareDevelopmentDescription')}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    alt={t('homePage.cybersecurity')}
                    height="200"
                    image="https://shorturl.at/b51Ht"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h4">{t('homePage.cybersecurity')}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    {t('homePage.cybersecurityDescription')}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    alt={t('homePage.cloudSolutions')}
                    height="200"
                    image="https://shorturl.at/q0eqm"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h4">{t('homePage.cloudSolutions')}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    {t('homePage.cloudSolutionsDescription')}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    alt={t('homePage.consulting')}
                    height="200"
                    image="https://www.kti.co.bw/wp-content/uploads/2021/02/IT-consulting.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h4">{t('homePage.consulting')}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    {t('homePage.consultingDescription')}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            </Grid>
        </Container>
        </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section" style={{ backgroundColor }}>
        <Container>
          <Typography variant="h4" className="section-heading" gutterBottom>{t('homePage.whyChooseTitle')}</Typography>
          <Typography variant="body1" paragraph>
            {t('homePage.whyChooseDescription')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4">{t('homePage.expertTeam')}</Typography>
              <Typography variant="body2" color="text.secondary">{t('homePage.expertTeamDescription')}</Typography>
            </Grid>
            {/* Other grid items */}
          </Grid>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" style={{ backgroundColor }}>
        <Container>
          <Typography variant="h4" className="section-heading" gutterBottom>{t('homePage.testimonialsTitle')}</Typography>
          <Grid container spacing={4}>
            {/* Repeat this block for each testimonial */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {t('homePage.testimonial1')}
                  </Typography>
                  <Typography variant="body2" align="right" color="text.secondary">
                    {t('homePage.testimonial1Author')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Repeat other testimonials */}
          </Grid>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{ backgroundColor }}>
        <Container>
          <Typography variant="h4" gutterBottom>{t('homePage.ctaTitle')}</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={Link} 
            to="/contact"
          >
            {t('homePage.cta')}
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;

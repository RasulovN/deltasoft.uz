import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';  // Importing translation hook

const About = () => {
  const { t } = useTranslation('global');  // Accessing translations

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      {/* Heading */}
      <Typography variant="h3" align="center" gutterBottom>
        {t('aboutPage.title')}
      </Typography>
      <Typography variant="h4" align="center" color="textSecondary" paragraph>
        {t('aboutPage.subtitle')}
      </Typography>

      {/* Introduction Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          {t('aboutPage.whoWeAre')}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {t('aboutPage.introduction')}
        </Typography>
      </Box>

      {/* Mission and Vision Section */}
      <Grid container spacing={4} sx={{ mt: 5 }}>
        {/* Mission */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {t('aboutPage.missionTitle')}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t('aboutPage.missionDescription')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Vision */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {t('aboutPage.visionTitle')}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t('aboutPage.visionDescription')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Core Values Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          {t('aboutPage.coreValuesTitle')}
        </Typography>
        <ul style={{ color: '#555', fontSize: '1rem', lineHeight: '1.8' }}>
          <li><strong>{t('aboutPage.valueInnovation')}:</strong> {t('aboutPage.valueInnovationDescription')}</li>
          <li><strong>{t('aboutPage.valueIntegrity')}:</strong> {t('aboutPage.valueIntegrityDescription')}</li>
          <li><strong>{t('aboutPage.valueExcellence')}:</strong> {t('aboutPage.valueExcellenceDescription')}</li>
          <li><strong>{t('aboutPage.valueCollaboration')}:</strong> {t('aboutPage.valueCollaborationDescription')}</li>
        </ul>
      </Box>

      {/* Footer/CTA Section */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          {t('aboutPage.ctaTitle')}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {t('aboutPage.ctaDescription')}
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

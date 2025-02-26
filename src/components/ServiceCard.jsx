import React from "react";
import { Card, CardContent, Typography, Button, Box, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ServiceCard({ service }) {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleBackToContact = () => {
    navigate("/contact/#sendmessage"); // #sendmessage id'si bilan Contact pagega yo'naltirish
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {service.description}
        </Typography>

        {/* Batafsil ma'lumot */}
        <Typography variant="h6" gutterBottom>
          {t('service.serviceCard.features')}
        </Typography>
        <ul>
          <li>{t('service.serviceCard.feature_1')}</li>
          <li>{t('service.serviceCard.feature_2')}</li>
          <li>{t('service.serviceCard.feature_3')}</li>
          <li>{t('service.serviceCard.feature_4')}</li>
        </ul>

        <Button variant="contained" color="primary" onClick={handleBackToContact}>
          {t('service.serviceCard.back_to_services')}
        </Button>
      </Paper>
    </Box>
  );
}

export default ServiceCard;

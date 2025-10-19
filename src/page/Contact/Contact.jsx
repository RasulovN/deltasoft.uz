import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, Select, MenuItem, InputLabel, FormControl, TextareaAutosize, Alert, Stack } from '@mui/material';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import BasicSpeedDial from '../../components/BasicSpeedDial';
import StoreIcon from '@mui/icons-material/Store';

function Contact() {
  const form = useRef();
  const { t } = useTranslation('global');
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertSeverity, setAlertSeverity] = useState("success");

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 5000); // 5 soniyadan keyin alertni o'chirish
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const templateParams = {
      to_name: "Admin", // Bu qismni kerakli qabul qiluvchi nomi bilan almashtiring
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      from_phone: formData.get("from_phone"),
      category: formData.get("category"),
      message: formData.get("message"),
    };

    emailjs
    .send("service_2pg6w68", "template_t9itdkf", templateParams, "oh8OPmBMfVjVzkXRz")
    .then(() => {
      setAlertSeverity("success");
      setAlertMessage(t("contact.sendMessage"));
      form.current.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error.text);
      setAlertSeverity("error");
      setAlertMessage(t("contact.errorOccurred"));
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      {/* Contact Heading */}
      <Typography variant="h3" align="center" gutterBottom>
        {t('contact.title')}
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          {t('contact.getInTouch')}
        </Typography>
        <Grid container spacing={5}>
        {/* Contact Info */}
        <Grid item xs={12} lg={12} md={4}>
          <Card sx={{ display: 'block', height: '100%' }}>
            <CardContent>
              <Typography variant="h4">{t('contact.contactDetails')}</Typography>
              <Typography variant="body1">{t('contact.phone')}: +998 33 003 3953</Typography>
              <Typography variant="body1">{t('contact.email')}: deltasoftuz@gmail.com</Typography>
              <Typography variant="body1">{t('contact.address')}: Uzbekistan</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} lg={12} md={4}>
          <Card sx={{ display: 'block', height: '100%' }}>
            <CardContent>
              <Typography variant="h4">{t('contact.followUs')}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Link to={`https://t.me/deltasoft_uz`} target="_blank">
                  <FaTelegramPlane style={{ fontSize: '30px', cursor: 'pointer', color: '#0c2ad4' }} titleAccess='Telegram'/>
                </Link>
                <Link to={`https://t.me/deltasoft_uzbot`} target="_blank">
                  <StoreIcon style={{ fontSize: '30px', cursor: 'pointer',  color: 'gold'  }} titleAccess='Telegram BOT'/>
                </Link>
                <Link to={`https://instagram.com/deltasoft.uz`} target="_blank">
                  <Instagram style={{ fontSize: '30px', cursor: 'pointer', color: '#cd486b' }} titleAccess='Instagram'/>
                </Link>
                <Link to={`https://www.linkedin.com/company/deltasoftuz`} target="_blank">
                  <LinkedIn style={{ fontSize: '30px', cursor: 'pointer', color: '#0c2ad4' }} titleAccess='LinkedIn'/>
                </Link>
                <Link to={`https://www.facebook.com/deltasoftuz/`} target="_blank">
                  <Facebook style={{ fontSize: '30px', cursor: 'pointer', color: '#0c2ad4' }} titleAccess='Facebook'/>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Map */}
        <Grid item xs={12} lg={12} md={4}>
          <Card sx={{ display: 'block', height: '100%' }}>
            <CardContent>
              <Typography variant="h4">{t('contact.ourLocation')}</Typography>
              <div style={{ width: '100%', height: '200px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6141656.403968505!2d59.325198663453136!3d41.26847842849497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa736fa737ac5561f%3A0xf2fcda9fd29f6f4d!2sDELTASOFT%20CYBERNETIC!5e0!3m2!1sru!2s!4v1730197557646!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      </Box>

      {/* Form Section */}
      <Box id="sendmessage">
      <Typography variant="h5" gutterBottom>
        {t("contact.sendMessage")}
      </Typography>
      {alertMessage && (
        <Stack sx={{ width: "100%", mb: 2 }} spacing={2}>
          <Alert severity={alertSeverity}>{alertMessage}</Alert>
        </Stack>
      )}
     <Card sx={{ maxWidth: 500, mx: "auto", p: 2 }}>
        <CardContent>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("contact.name")}
                  name="from_name"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("contact.emailForm")}
                  name="from_email"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("contact.phoneForm")}
                  name="from_phone"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>{t("contact.category")}</InputLabel>
                  <Select label={t("contact.category")} name="category" required>
                    <MenuItem value={t("contact.website")}>{t("contact.website")}</MenuItem>
                    <MenuItem value={t("contact.app")}>{t("contact.app")}</MenuItem>
                    <MenuItem value={t("contact.seo")}>{t("contact.seo")}</MenuItem>
                    <MenuItem value={t("contact.cloud")}>{t("contact.cloud")}</MenuItem>
                    <MenuItem value={t("contact.cybersecurity")}>{t("contact.cybersecurity")}</MenuItem>
                    <MenuItem value={t("contact.other")}>{t("contact.other")}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("contact.message")}
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  {t("contact.sendMessageButton")}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      </Box>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <BasicSpeedDial />
      </div>


    </Container>
  );
}

export default Contact;

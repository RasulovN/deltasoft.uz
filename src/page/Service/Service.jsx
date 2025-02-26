import { Box, Button, Container, Grid, Typography, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
import { useServices } from "./servecedata";
import { useTranslation } from "react-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Service() {
  const services = useServices();
  const [value, setValue] = useState(0);
  const [selectedService, setSelectedService] = useState(services[0]); // Default to first service
  const { t } = useTranslation("global");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedService(services[newValue]); // Set the selected service based on the tab index
  };

  return (
    <div className="max-h-full" style={{ height: "100vh", overflow: "hidden", marginBottom: "200px" }}>
      <Container sx={{ marginTop: 4, height: "100vh", display: "flex", flexDirection: "column", overflowY: "auto", marginBottom: "50px" }}>
        {/* Services Header */}
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography variant="h3" gutterBottom>
            {t("service.title")}
          </Typography>
          <Typography variant="h5" paragraph>
            {t("service.description")}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: "100vh", overflowY: "auto", marginBottom: "50px" }}>
          {/* Flexbox layout with responsive direction */}

          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              display: { xs: 'none', sm: 'block' }, // Hide vertical tabs on small screens
              borderRight: 1,
              borderColor: 'divider',
              width: 250,
              height: "100%", // Ensure tabs stay within the full height
              overflowY: "auto", // Allow scrolling if content is long
              '&::-webkit-scrollbar': {
                display: 'none', // Hides scrollbar in WebKit browsers
              },
              '-ms-overflow-style': 'none', // Hides scrollbar in Internet Explorer
              'scrollbar-width': 'none', // Hides scrollbar in Firefox
            }}
          >
            {services.map((service, index) => (
              <Tab key={service.id} label={service.title} {...a11yProps(index)} />
            ))}
          </Tabs>

          {/* On small screens, make the tabs horizontal and scrollable */}
          <Box sx={{ display: { xs: 'block', sm: 'none' }, width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="Scrollable tabs example"
              sx={{
                bgcolor: 'background.paper',
                width: "100%",
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              {services.map((service, index) => (
                <Tab key={service.id} label={service.title} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>

          {/* Dynamic rendering of TabPanels */}
          <Box sx={{ flex: 1, overflowY: "auto", height: '100vh', marginBottom: "50px", '&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
            {services.map((service, index) => (
              <TabPanel key={service.id} value={value} index={index}>
                <ServiceCard service={service} setSelectedService={setSelectedService} />
              </TabPanel>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Service;

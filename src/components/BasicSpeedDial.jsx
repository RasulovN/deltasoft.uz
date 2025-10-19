import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function BasicSpeedDial() {
  const [showSocials, setShowSocials] = React.useState(false);

  // Asosiy tugmalar
  const mainActions = [
    {
      icon: <PhoneIcon />,
      name: "Call",
      action: () => (window.location.href = "tel:+998330033953"),
    },
    {
      icon: <EmailIcon />,
      name: "Email",
      action: () => (window.location.href = "mailto:deltasoftuz@gmail.com"),
    },
    {
      icon: <ShareIcon />,
      name: "Socials",
      action: () => setShowSocials((prev) => !prev),
    },
  ];

  // Ijtimoiy tarmoq tugmalari (chapdan chiqadi)
  const socialActions = [
    {
      icon: <TelegramIcon />,
      name: "Telegram",
      link: "https://t.me/deltasoft_uz",
    },
    {
      icon: <TelegramIcon />,
      name: "Telegram Bot",
      link: "https://t.me/deltasoft_uzbot",
    },
    {
      icon: <InstagramIcon />,
      name: "Instagram",
      link: "https://instagram.com/deltasoft.uz",
    },
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/deltasoftuz",
    },
    {
      icon: <FacebookIcon />,
      name: "Facebook",
      link: "https://www.facebook.com/deltasoftuz/",
    },
  ];

  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <SpeedDial ariaLabel="Contact options" icon={<SpeedDialIcon />} direction="up">
        {mainActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}

        {/* Socials bosilganda ijtimoiy tarmoqlar chiqadi */}
        {showSocials &&
          socialActions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="left"
              onClick={() => window.open(action.link, "_blank")}
            />
          ))}
      </SpeedDial>
    </Box>
  );
}

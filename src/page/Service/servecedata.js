import { useTranslation } from "react-i18next";

export const useServices = () => {
  const { t } = useTranslation("global");

  return [
    {
      id: 1,
      title: t("service.software_development.title"),
      description: t("service.software_development.description"),
    },
    {
      id: 2,
      title: t("service.cyber_security.title"),
      description: t("service.cyber_security.description"),
    },
    {
      id: 3,
      title: t("service.ai_machine_learning.title"),
      description: t("service.ai_machine_learning.description"),
    },
    {
      id: 4,
      title: t("service.cloud_services.title"),
      description: t("service.cloud_services.description"),
    },
    {
      id: 5,
      title: t("service.mobile_app_development.title"),
      description: t("service.mobile_app_development.description"),
    },
    {
      id: 6,
      title: t("service.it_consultancy.title"),
      description: t("service.it_consultancy.description"),
    },
    {
      id: 7,
      title: t("service.iot_solutions.title"),
      description: t("service.iot_solutions.description"),
    },
    {
      id: 8,
      title: t("service.blockchain_development.title"),
      description: t("service.blockchain_development.description"),
    },
    {
      id: 9,
      title: t("service.ui_ux_design.title"),
      description: t("service.ui_ux_design.description"),
    },
    {
      id: 10,
      title: t("service.digital_marketing.title"),
      description: t("service.digital_marketing.description"),
    },
    {
      id: 11,
      title: t("service.special_bots.title"),
      description: t("service.special_bots.description"),
    },
  ];
};

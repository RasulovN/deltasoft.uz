import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ServiceCard({ service }) {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const mode = useSelector((state) => state.theme.mode); // Redux theme mode

  const handleBackToContact = () => {
    navigate("/contact/#sendmessage");
  };

  return (
    <div className="mt-6 mx-auto max-w-3xl">
      <div className={`rounded-lg p-6 shadow-lg ${mode === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"} hover:shadow-xl transition-shadow duration-300`}>
        <h2 className="text-2xl font-bold mb-4">
          {service.title}
        </h2>
        <p className={`mb-6 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          {service.description}
        </p>

        {/* Features Section */}
        <h3 className="text-xl font-semibold mb-3">
          {t("service.serviceCard.features")}
        </h3>
        <ul className={`list-disc pl-6 mb-6 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          <li>{t("service.serviceCard.feature_1")}</li>
          <li>{t("service.serviceCard.feature_2")}</li>
          <li>{t("service.serviceCard.feature_3")}</li>
          <li>{t("service.serviceCard.feature_4")}</li>
        </ul>

        <button
          onClick={handleBackToContact}
          className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
            mode === "dark" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {t("service.serviceCard.back_to_services")}
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
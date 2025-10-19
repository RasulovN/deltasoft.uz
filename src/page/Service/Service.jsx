import React, { useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import { useServices } from "./servecedata";
import { useTranslation } from "react-i18next";
import TabPanel from "./TabPanel";
import { useSelector } from "react-redux";

function Service() {
  const services = useServices();
  const [value, setValue] = useState(0);
  const { t } = useTranslation("global");
  const mode = useSelector((state) => state.theme.mode); // Redux theme mode

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`min-h-screen ${mode === "dark" ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl sm:text-5xl font-extrabold ${mode === "dark" ? "text-white" : "text-gray-900"} tracking-tight`}>
            {t("service.title")}
          </h1>
          <p className={`mt-4 text-lg sm:text-xl ${mode === "dark" ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            {t("service.description")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Vertical Tabs for larger screens */}
          <div className="hidden lg:block w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-y-auto max-h-[calc(100vh-250px)] scrollbar-hidden">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleChange(index)}
                className={`w-full text-left py-3 px-5 text-base font-medium ${
                  mode === "dark"
                    ? value === index
                      ? "bg-gray-800 text-blue-300 border-l-4 border-blue-500"
                      : "text-gray-300 hover:bg-gray-700"
                    : value === index
                    ? "bg-white text-blue-700 border-l-4 border-blue-600"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                } transition-colors duration-200`}
                role="tab"
                id={`vertical-tab-${index}`}
                aria-controls={`vertical-tabpanel-${index}`}
                aria-selected={value === index}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Horizontal Tabs for smaller screens */}
          <div className="lg:hidden w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-x-auto">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleChange(index)}
                  className={`flex-1 py-3 px-4 text-sm sm:text-base font-medium  ${
                    mode === "dark"
                      ? value === index
                        ? "bg-gray-800 border-b-2 border-blue-500 text-blue-300"
                        : " text-gray-300 hover:bg-white"
                      : value === index
                      ? "bg-white border-b-2 border-blue-600 text-blue-700"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  } transition-colors duration-200`}
                  role="tab"
                  id={`vertical-tab-${index}`}
                  aria-controls={`vertical-tabpanel-${index}`}
                  aria-selected={value === index}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-250px)] scrollbar-hidden">
            {services.map((service, index) => (
              <TabPanel key={service.id} value={value} index={index}>
                <ServiceCard service={service} />
              </TabPanel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
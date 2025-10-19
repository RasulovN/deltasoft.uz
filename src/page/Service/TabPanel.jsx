import React from "react";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
    const mode = useSelector((state) => state.theme.mode); // Redux theme mode

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={`p-4 sm:p-6 ${mode === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export default TabPanel;
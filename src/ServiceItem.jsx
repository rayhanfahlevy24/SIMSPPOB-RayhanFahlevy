import React from "react";

const ServiceItem = ({ iconSrc, label }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md hover:bg-gray-100">
      <img src={iconSrc} alt={label} className="w-15 h-15 mb-2" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default ServiceItem;
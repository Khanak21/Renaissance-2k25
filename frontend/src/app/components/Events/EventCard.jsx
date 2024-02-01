import React from "react";
import { FaCoffee } from "react-icons/fa";

const EventCard = ({ title, description }) => {
  return (
    <div className="relative group bg-white shadow-md rounded-md p-4 text-center overflow-hidden">
      <FaCoffee
        size={60}
        className="text-blue-500 mx-auto mb-3 transition-all duration-300 group-hover:blur"
      />
      <h3 className="text-xl font-semibold mb-2 transition-all duration-300 group-hover:blur">
        {title}
      </h3>
      <p className="text-gray-700 transition-all duration-300 group-hover:blur">
        {description}
      </p>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-transparent text-white transition-all duration-300 group-hover:opacity-100">
        <button className="px-4 py-2 bg-white text-blue-500 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;

import Link from "next/link";
import React from "react";

const EventCard = ({ title, description, route, svg, id, showNumber = true }) => {
  return (
    <div className="flex flex-col w-full h-full p-6">
      {/* Card Header with Image or Number */}
      {(svg || showNumber) && (
        <div className="flex items-center justify-center mb-6">
          {svg ? (
            <img
              src={`${svg}`}
              alt={title}
              className="object-contain w-20 h-20 opacity-90"
            />
          ) : showNumber ? (
            <div className="flex items-center justify-center w-20 h-20 text-4xl font-bold text-[#ffde89] opacity-50">
              {String(id + 1).padStart(2, '0')}
            </div>
          ) : null}
        </div>
      )}

      {/* Event Title */}
      <h2 className="mb-4 text-center text-base font-bold text-white leading-snug px-2">
        {title}
      </h2>

      {/* Description */}
      <p className="flex-grow mb-6 text-sm text-center text-gray-400 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Read More Button */}
      <div className="flex items-center justify-center mt-auto">
        <Link
          href={`/events/${route}`}
          target="_blank"
          className="flex items-center justify-center gap-2 px-5 py-2 text-xs font-medium text-[#ffde89] border border-[#ffde89] rounded-md hover:bg-[#ffde89] hover:text-[#27282a] transition-all duration-200"
        >
          <span>LEARN MORE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={12}
            width={12}
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

import Link from "next/link";
import React from "react";

const EventCard = ({ title, description, route, svg, id }) => {
  return (
    // <div
    //   className="relative font-bold min-h-[20em] group rounded-3xl hover:border-dashed hover:border-2 hover:border-[#ffde89] bg-[#27282a] shadow-lg lg:w-[20%]"
    //   key={id}
    // >
    <div className="flex flex-col-reverse items-center justify-around w-full h-full group-hover:shadow-3xl">
      <img
        src={`${svg}`}
        alt=""
        className="absolute object-cover w-36 h-36 top-12 opacity-70 group-hover:opacity-90"
      />

      <div className="absolute text-[#EFF5DB] bottom-12 text-6xl opacity-30">
        0{id + 1}
      </div>

      <div className="flex items-center justify-center delay-1000 transform group-hover:hidden">
        <h2 className="px-2 text-lg font-extrabold text-white xl:text-xl">
          {title}
        </h2>
      </div>
      <div className="z-20 flex flex-col justify-around h-0 px-4 py-4 overflow-hidden duration-500 ease-linear bg-white opacity-0 group-hover:-translate-x-0 group-hover:-translate-y-8 group-hover:h-full group-hover:opacity-100 rounded-3xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-base font-extrabold lg:text-lg">DESCRIPTION</h2>
          <div className="mt-2 text-base text-center">{description}</div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Link
            href={`/events/${route}`}
            target="_blank"
            className="flex items-center justify-center px-8 py-1 text-sm bg-[#eef5db] w-fit hover:bg-[inset_0_0_0_0_rgb(132,169,140)] rounded-2xl"
          >
            <span className="pr-2 text-base">READ MORE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={16}
              width={16}
              viewBox="0 0 512 512"
              className=""
            >
              <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="absolute h-0 overflow-hidden text-base font-bold text-white duration-500 ease-linear opacity-0 -bottom-10 group-hover:bottom-0 group-hover:opacity-100 group-hover:h-fit">
        {title}
      </div>
    </div>
    // </div>
  );
};

export default EventCard;

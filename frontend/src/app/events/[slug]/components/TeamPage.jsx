import "./TeamPageStyles.css";
import img from "../../../assets/EventComponent/Five.jpg";
import { useEffect, useState } from "react";
import getEventApi from "../../../../api/getEvent.api";

const TeamPage = ({ eventid }) => {
  const [eventDetails, setEventsDetails] = useState(null);
  useEffect(() => {
    getEventApi({ eventid }).then((data) => {
      if (data.success) {
        setEventsDetails(data.data);
      }
    });
  }, []);

  return (
    <>
      <div
        id="Heading"
        className="bg-custom-dark pt-[150px] text-center py-[50px] sm:flex sm:flex-col lg:flex lg:flex-row justify-center items-center"
      >
        <div className="xlsm:h-[400px] xs:h-[370px] sm:h-[350px] lg:h-[260px] mb-[285px] z-10 w-full text-center xlsm:text-7xl xs:text-7xl sm:text-7xl lg:text-9xl font-bold text-custom-secondary tracking-wide absolute">
          {eventDetails?.eventName}
        </div>
        <div>
          <div className="lg:mr-[110px] bg-white h-[640px] flex items-end w-[500px] z-0 relative">
            <div className="w-full h-full opacity-[30%] bg-black absolute"></div>
            <img className="bg-white" src={img} alt="" />
          </div>
        </div>
        <div className="lg:h-[300px] flex lg:items-end sm:pt-10">
          <div
            id="Participate"
            className="flex flex-col justify-center items-center"
          >
            <div className="sm:ml-[110px] text-custom-secondary text-4xl font-semibold">
              24th March, 2022
            </div>
            <div className="sm:ml-[110px] flex justify-end">
              <button className="bg-custom-secondary mt-5 px-3 py-3 pl-4 w-50 text-left rounded-sm font-semibold flex justify-left items-center hover:bg-custom-accent transition ease-in-out duration-700">
                CONFIRM YOUR SEAT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-1 w-7 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Description"
        className="bg-white sm:flex sm:flex-col justify-center items-center lg:flex lg:flex-row"
      >
        <div
          id="DesHead"
          className="w-1/2 lg:pl-40 xl:pl-80 lg:pr-10 xl:pr-20 lg:py-20 sm:pt-10 sm:pb-5 flex justify-center items-center text-4xl font-semibold tracking-wide"
        >
          DESCRIPTION
        </div>
        <div className="text-base w-1/2 lg:pr-40 xl:pr-70 lg:pl-10 lg:py-10 sm:pb-10 sm:text-center flex justify-center items-center">
          {eventDetails?.description}
        </div>
      </div>
      <div className="">
        <div
          id="Format"
          className="bg-custom-dark lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center pt-10 lg:pb-10 xlsm:pb-20 xs:pb-20 sm:pb-0"
        >
          <div
            id="FormatHead"
            className="lg:hidden w-1/2 lg:pl-40 xl:pl-60 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            FORMAT
          </div>
          <div className="w-1/2 lg:pl-40 xl:pl-70 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-10 flex flex-col justify-center items-center text-gray-300">
            <ul className="text-base">
              {eventDetails &&
                eventDetails.format.map((item,index) => {
                  return <li key={index} className="mb-2">{item}</li>;
                })}
            </ul>
          </div>
          <div
            id="FormatHeadDown"
            className="w-1/2 lg:pr-40 xl:pr-60 lg:pl-10 xl:pl-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            FORMAT
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;

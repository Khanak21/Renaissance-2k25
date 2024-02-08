import "./TeamPageStyles.css";
import img from "../../../assets/EventComponent/Five.jpg";
import { useEffect, useState } from "react";
import getEventApi from "../../../../api/getEvent.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import registerUserApi from "../../../../api/registerEvent.api";
import getAllUserDetailsApi from "../../../../api/getAllUserDetails.api";
import unregisterUserApi from "../../../../api/unregisterEvent.api";
import Image from "next/image";

const TeamPage = ({ eventid }) => {
  const [eventDetails, setEventsDetails] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    }
    getEventApi({ eventid }).then((data) => {
      if (data.success) {
        setEventsDetails(data.data);
      }
      if (token) {
        getAllUserDetailsApi().then((userData) => {
          if (userData.success) {
            const userRegisteredEventsArray = userData.data.eventsParticipated;
            if (userRegisteredEventsArray.includes(data.data._id)) {
              setIsUserRegistered(true);
            }
          }
        });
      }
    });
  }, []);

  const handleParticipateClick = async () => {
    if (isUserLoggedIn) {
      if (isUserRegistered) {
        unregisterUserApi({ eventId: eventDetails._id }).then((data) => {
          if (data.success) {
            toast.success(data.message);
            setIsUserRegistered(false);
          } else {
            toast.error(data.message);
          }
        });
      } else {
        registerUserApi({ eventId: eventDetails._id }).then((data) => {
          if (data.success) {
            toast.success(data.message);
            setIsUserRegistered(true);
          } else {
            toast.error(data.message);
          }
        });
      }
    } else {
      toast.error("register yourself to continue.");
      router.push("/auth/register");
    }
  };

  return (
    <>
      <div
        id="Heading"
        className="bg-[#DB5461] pt-[6rem] text-center py-[50px] sm:flex sm:flex-col lg:flex lg:flex-row justify-center items-center"
      >
        <div className="mb-[285px] z-10 w-full text-center text-4xl lg:text-6xl font-bold text-custom-secondary tracking-wide absolute drop-shadow-lg">
          {eventDetails?.eventName}
        </div>
        <div>
          <div className="lg:mr-[110px]  flex items-end  ">
            <Image
              className="brightness-75"
              src={eventDetails?.imagePath}
              alt="event image"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className="lg:h-[300px] flex lg:items-end sm:pt-10">
          <div
            id="Participate"
            className="flex flex-col items-center justify-center"
          >
            <div className="sm:ml-[110px] text-custom-secondary text-lg lg:text-2xl font-semibold">
              10th Febraury, 2024
            </div>
            <div className="sm:ml-[110px] flex justify-end">
              <button
                onClick={handleParticipateClick}
                className="bg-custom-secondary hover:bg-[#eafeb1] mt-5 px-3 py-3 pl-4 w-50 text-left rounded-sm font-semibold flex justify-left items-center  transition ease-in-out duration-100"
              >
                {isUserRegistered ? "UNREGISTER" : "CONFIRM YOUR SEAT"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 ml-1 w-7"
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
      <div className="bg-gradient-to-b from-custom-accent  to-custom-secondary px-2 lg:px-[6rem]">
        <div
          id="Description"
          className="items-center justify-center sm:flex sm:flex-col lg:flex lg:flex-row"
        >
          <div
            id="DesHead"
            className="flex items-center justify-center w-1/2 text-xl lg:text-3xl font-semibold tracking-wide lg:pl-40 xl:pl-80 lg:pr-10 xl:pr-20 lg:py-20 sm:pt-10 sm:pb-5"
          >
            DESCRIPTION
          </div>
          <div className="backdrop-blur-sm bg-white/10 flex items-center justify-center lg:w-1/2 text-base p-8 sm:text-center ">
            {eventDetails?.description}
          </div>
        </div>
        <div className="">
          <div
            id="Format"
            className="lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center pt-10 lg:pb-10 xlsm:pb-20 xs:pb-20 sm:pb-0"
          >
            <div
              id="FormatHead"
              className="lg:hidden w-1/2 lg:pl-40 xl:pl-60 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-8 flex justify-center items-center text-xl lg:text-3xl font-semibold tracking-wide text-black"
            >
              FORMAT
            </div>
            <div className="backdrop-blur-sm bg-white/10 lg:w-1/2 p-8 flex flex-col justify-center items-center text-black text-base">
              <ul className="text-base">
                {eventDetails &&
                  eventDetails.format.map((item, index) => {
                    return (
                      <li key={index} className="mb-2">
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div
              id="FormatHeadDown"
              className="w-1/2 lg:pr-40 xl:pr-60 lg:pl-10 xl:pl-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-black"
            >
              FORMAT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;

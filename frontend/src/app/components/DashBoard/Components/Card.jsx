import React, { useState } from "react";
import registerEventApi from "../../../../api/registerEvent.api";
import toast from "react-hot-toast";
import unregisterUserApi from "../../../../api/unregisterEvent.api";

const Card = ({
  eventName,
  svg,
  eventId,
  isUserRegistered,
  cardClickHandler,
}) => {
  const registerForEventClick = () => {
    registerEventApi({ eventId }).then((data) => {
      if (data.success) {
        toast.success(data.message);
        cardClickHandler();
      } else {
        toast.error(data.message);
      }
    });
  };

  const unregisterForEventClick = () => {
    unregisterUserApi({ eventId }).then((data) => {
      if (data.success) {
        toast(data.message);
        cardClickHandler();
      } else {
        toast.error(data.message);
      }
    });
  };
  return (
    <div className="flex justify-center items-center bg-white rounded-md shadow-sm p-4 w-[90%] md:w-[200px] h-[200px]">
      <div className="h-full text-center text-base flex flex-col items-center justify-between">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="w-[60px] h-[60px]">
            <img src={svg} className="w-[60px] h-[60px]" />
          </div>
          <h1 className="font-bold mb-4 p-2">{eventName}</h1>
        </div>

        {!isUserRegistered ? (
          <div className="w-[8rem] h-[20px] bg-green-500 p-4 flex justify-center items-center text-white">
            <button onClick={registerForEventClick}>REGISTER</button>
          </div>
        ) : (
          <div>
            <button
              onClick={unregisterForEventClick}
              className="w-[8rem] h-[20px] bg-red-500 p-4 flex justify-center items-center text-white"
            >
              UNREGISTER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

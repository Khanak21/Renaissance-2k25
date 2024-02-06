import React, { useState } from "react";

const Card = () => {
  const [ShowUnregisterBtn, setShowUnRegisterBtn] = useState(1);
  async function registerForTheEvent() {
    setShowUnRegisterBtn(!ShowUnregisterBtn);
  }
  return (
    <div className="flex justify-center items-center bg-white rounded-md shadow-sm p-4 w-[90%] md:w-[200px] md:h-[200px]">
      <div className="text-center text-base flex flex-col items-center justify-center">
        <div className="w-[60px] h-[60px]"><img src='./EventSvgs/etalk.png'/></div>
        <h1 className="font-bold mb-4 p-2">B-PLAN</h1>

        {ShowUnregisterBtn ? (
          <div className="w-full h-[20px] bg-red-500 p-4 flex justify-center items-center text-white">
            <button onClick={registerForTheEvent}>REGISTER</button>
          </div>
        ) : (
          <div>
            <button onClick={registerForTheEvent} className="w-full h-[20px] bg-green-500 p-4 flex justify-center items-center text-white">
              UNREGISTER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

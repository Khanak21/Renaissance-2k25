import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Card from "./Components/Card";

const Dashboard = () => {
  return (
    <>
      <div className="box-border px-4 md:px-12 lg:px-20 ">
        <div className="flex flex-col lg:flex-row ">
          <div className="basis-1/3 p-4 h-full">
            <div className="w-full  bg-gray-200 p-2 rounded-md shadow-md">
              <div className="w-full m-4 flex flex-col justify-center items-center">
                <FaUserCircle className="w-full h-24" />
                <p className="text-base lg:text-lg font-bold my-2">
                  Sambhav jain
                </p>
              </div>
              <div className="text-base w-full px-6 py-2 flex flex-col justify-center items-left">
                <p>
                  <span className="font-bold">RenID : </span> REN202454654
                </p>
                <p>
                  <span className="font-bold">Email : </span>{" "}
                  sambhavjain233@gmail.com
                </p>
                <p>
                  <span className="font-bold">Phone No. : </span> 7668987249
                </p>
              </div>
            </div>
          </div>
          <div className="basis-2/3 p-4 h-full">
            <div className="w-full  bg-gray-200 p-2 rounded-md shadow-md">
              <div className="text-base w-full px-6 py-2 flex flex-col justify-center items-center">
                <p className="font-bold text-base lg:text-lg">
                  Registered Events
                </p>
              </div>
              <div className="m-4 grid grid-cols-4 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 h-full">
          <div className="w-full  bg-gray-200 p-2 rounded-md shadow-md h-[300px]"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

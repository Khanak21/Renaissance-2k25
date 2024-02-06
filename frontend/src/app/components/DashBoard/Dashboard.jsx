import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Card from "./Components/Card";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col-reverse px-[40px] md:flex-row">
        <div className="mt-[40px] md:p-4 flex-1 md:flex-[0.65] xl:flex-[0.75]">
          <div className="w-full h-[100%] bg-gray-200 p-2 rounded-md shadow-md h-screen">
            <div className="text-base w-full px-6 py-2 flex flex-col justify-center items-center">
              <p className="font-bold text-base lg:text-lg">
                RENESSANCE EVENTS
              </p>
            </div>
            <div className="items-center justify-center mt-[40px] md:mt-[40px] px-[20px] flex flex-wrap gap-[50px]">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="w-full mt-[50px] md:mt-[0px] md:flex-[0.35] xl:flex-[0.25] md:pt-[59px]">
          <div className="w-full flex flex-col bg-gray-200 py-[40px]">
            <div className="w-full flex flex-col justify-center items-center">
              <FaUserCircle className="w-24 h-24" />
              <p className="text-base lg:text-lg font-bold">Sambhav jain</p>
            </div>
 
            <div className="text-base px-6 py-2 flex flex-col mt-[40px]">
              <p className="">
                <span className="font-bold">RenID : </span> REN202454654
              </p>
              <p>
                <span className="font-bold">Email : </span>{" "}
                sambhavjain233@gmail.com
              </p>
              <p>
                <span className="font-bold">Phone No. : </span> 7668987249
              </p>
              <p>
                <span className="font-bold">Gender : </span> Male
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex-[0.3] h-screen box-border w-screen">
          <div className="flex h-screen flex-col lg:flex-row lg:w-full ">
            <div className="p-4 h-full">
              <div className="w-full  h-screen bg-gray-200 p-2 rounded-md shadow-md">
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
                  <p>
                    <span className="font-bold">Gender : </span> Male
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;

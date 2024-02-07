import Link from "next/link";
import React from "react";
import {
  BsFillCheckCircleFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { RiArrowDropUpLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-custom-primary pt-8" id="contact">
        <div className="Header text-white text-lg lg:text-2xl flex flex-col justify-center align-middle items-center p-4 px-16 md:px-4">
          <p className="text-center">We Have Top Executives And Startup Here</p>
        </div>

        <div className="Content mt-4 mb-4 mr-10 ml-10 lg:ml-28 lg:mr-28 flex pt-2 pb-10  lg:h-[400px] flex-col  lg:flex-row">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="text-white  w-full flex flex-col justify-around">
              <div className="flex p-4 text-base  lg:text-lg">
                <BsFillCheckCircleFill className="text-[42px] md:text-xl text-[#CAD2C5]  mr-4 text-justify" />
                <p className="">
                  Through True Rich Attended does no end it his mother since
                </p>
              </div>
              <div className="flex p-4">
                <BsFillCheckCircleFill className="text-[42px] md:text-xl text-[#CAD2C5] mr-4 text-justify" />
                <p className="">
                  Attended does no end it his mother since real had half every
                </p>
              </div>
              <div className="flex p-4">
                <BsFillCheckCircleFill className="text-[42px] md:text-xl text-[#CAD2C5] mr-4 text-justify" />
                <p className="">
                  Since real had half every him case in packages enquire we up
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-200 h-80 mt-5 mb-5">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jNF_Vs7Zw-Y"
                title="Renaissance (6.0) || The Annual E-Summit of NIT Allahabad || HUES OF IMAGINATION"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer bg-custom-accent ">
          <div className="flex justify-center items-center">
            <div className="logo w-1/4"></div>

            <div className="Event w-3/4  ">
              <div className="bg-gradient-to-r from-white to-gray-900 mt-20 mb-8 p-0.5 shadow-2xl">
                <div className="bg-custom-primary h-full flex flex-col lg:flex-row pt-10 pb-10 pr-4 pl-4">
                  <div className="flex w-full">
                    <div className="h-80 flex flex-col justify-center text-left pl-10 lg:ml-40">
                      <p className="text-white text-base mt-4 mb-4">
                        EVENT <br></br>DETAILS
                      </p>
                      <p className="text-custom-secondary mt-4 mb-4">
                        Febraury 10-11,2021
                      </p>
                      <p className="text-white mt-4 mb-4">
                        PRAYAGRAJ, UTTAR PRADESH, INDIA – 211004
                      </p>
                      <Link href="/#location">
                        <p className="text-white mt-4 mb-4">
                          View Map Locations
                        </p>
                      </Link>
                    </div>
                  </div>

                  <div className="flex  justify-center  w-full lg:mr-80 lg:mt-10 pl-10 ">
                    <div className="h-80 text-white flex flex-col justify-center text-left lg:ml-40">
                      <p>SOCIAL UPDATES</p>

                      <div className="icons justify-around flex h-40 items-center text-3xl  w-full">
                        <a
                          href="https://www.facebook.com/mnnitecell"
                          target="_blank"
                        >
                          <div className="bg-custom-secondary  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl mr-2">
                            <BsFacebook className=" text-custom-primary rounded-full shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-600" />
                          </div>
                        </a>
                        <a
                          href="https://twitter.com/ECellMNNIT"
                          target="_blank"
                        >
                          <div className="bg-custom-secondary  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl mr-2">
                            <BsTwitter className=" text-custom-primary shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-400" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/13249340"
                          target="_blank"
                        >
                          <div className="bg-custom-secondary  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl mr-2">
                            <BsLinkedin className=" text-custom-primary shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-800" />
                          </div>
                        </a>
                        <a
                          href="https://www.instagram.com/ecellmnnit/"
                          target="_blank"
                        >
                          <div className="bg-custom-secondary w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl mr-2">
                            <BsYoutube className=" text-custom-primary hover:p-[2px] hover:text-red-700 cursor-pointer" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" flex w-full  lg:items-end justify-end pr-8 pb-5 ">
            <button className="bg-[#CAD2C5] h-[47px] w-[47px] flex items-center justify-center shadow-2xl">
              <RiArrowDropUpLine className="text-[30px]" />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;

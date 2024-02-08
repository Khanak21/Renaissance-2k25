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
      <div className="w-full pt-8 bg-custom-primary" id="contact">
        <div className="flex flex-col items-center justify-center p-4 px-16 text-lg align-middle text-custom-secondary Header lg:text-2xl md:px-4">
          <p className="text-center">We Have Top Executives And Startup Here</p>
        </div>

        <div className="Content mt-4 mb-4 mr-10 ml-10 lg:ml-28 lg:mr-28 flex pt-2 pb-10  lg:h-[400px] flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="flex flex-col justify-around w-full text-custom-light">
              <div className="flex p-4 text-base lg:text-lg">
                <BsFillCheckCircleFill className="mr-4 text-base text-justify md:text-lg text-custom-secondary" />
                <p className="">
                  Bringing invaluable expertise to guide startup ideas
                </p>
              </div>
              <div className="flex p-4 text-base lg:text-lg">
                <BsFillCheckCircleFill className="mr-4 text-base text-justify md:text-lg text-custom-secondary" />
                <p className="">
                  Provides a platform for aspiring entrepreneurs

                </p>
              </div>
              <div className="flex p-4 text-base lg:text-lg">
                <BsFillCheckCircleFill className="mr-4 text-base text-justify md:text-lg text-custom-secondary" />
                <p className="">
                  Harbor entrepreneurial skills and stimulate discussion
                </p>
              </div>
            </div>

            <div className="w-full mt-5 mb-5 bg-gray-200 h-80">
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
          <div className="flex items-center justify-center">
            <div className="w-1/5 logo"></div>

            <div className="w-4/5 Event ">
              <div className="bg-gradient-to-r from-white to-gray-900 my-4 md:my-4 p-0.5 shadow-2xl">
                <div className="flex flex-col h-full bg-custom-primary lg:flex-row">
                  <div className="flex w-full">
                    <div className="flex flex-col justify-start pl-4 ml-4 text-base text-left lg:ml-10 lg:pl-0">
                      <p className="mt-4 mb-4 font-bold text-white lg:mt-6 lg:text-lg">
                        EVENT DETAILS
                      </p>
                      <p className="mt-4 mb-4 text-custom-warm">
                        February 10 to 11, 2024
                      </p>
                      <p className="mt-4 mb-4 text-white">
                        E-Cell, MNNIT Allahabad, <br />
                        Prayagraj, Uttar Pradesh, <br />
                        India - 211004
                      </p>
                      <a
                        target="_blank"
                        href="https://goo.gl/maps/oMivUDXkAypzfawm8"
                        className="mt-4 mb-4 underline cursor-pointer text-custom-warm"
                      >
                        VIEW MAP LOCATION
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-start w-full">
                    <div className="flex flex-col justify-start pl-4 mb-4 ml-4 text-left text-white md:mb-0 lg:pl-0 lg:ml-0">
                      <p className="mt-4 text-base font-bold lg:mt-6 lg:text-lg">SOCIAL UPDATES</p>
                      <h1 className="mt-3 text-base text-custom-light md:mt-8">
                        You may wonder: why this event so popular?{" "}
                      </h1>
                      <h1 className="text-base text-custom-light">
                        If you do, find more info about it here.
                      </h1>
                      <div className="flex items-center justify-start w-full py-4 text-xl md:gap-5 md:text-2xl lg:py-6 icons">
                        <a
                          href="https://www.facebook.com/mnnitecell"
                          target="_blank"
                        >
                          <div className="flex items-center justify-center w-12 h-12 mr-2 rounded-full shadow-2xl bg-custom-secondary">
                            <BsFacebook className=" text-custom-primary rounded-full shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-600" />
                          </div>
                        </a>
                        <a
                          href="https://twitter.com/ECellMNNIT"
                          target="_blank"
                        >
                          <div className="flex items-center justify-center w-12 h-12 mr-2 rounded-full shadow-2xl bg-custom-secondary">
                            <BsTwitter className=" text-custom-primary shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-400" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/13249340"
                          target="_blank"
                        >
                          <div className="flex items-center justify-center w-12 h-12 mr-2 rounded-full shadow-2xl bg-custom-secondary">
                            <BsLinkedin className=" text-custom-primary shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-800" />
                          </div>
                        </a>
                        <a
                          href="https://www.instagram.com/ecellmnnit/"
                          target="_blank"
                        >
                          <div className="flex items-center justify-center w-12 h-12 mr-2 rounded-full shadow-2xl bg-custom-secondary">
                            <BsYoutube className=" text-custom-primary hover:p-[2px] hover:text-red-700 cursor-pointer" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-6 text-xs text-center bg-custom-primary md:text-base ">
                  <h1 className="text-custom-light ">
                    Copyright © Renaissance 2024. All rights reserved
                  </h1>
                </div>
              </div>

            </div>
          </div>

          {/* <div className="flex justify-end w-full pb-5 pr-8 lg:items-end">
            <button className="bg-custom-secondary h-[47px] w-[47px] flex items-center justify-center shadow-2xl">
              <RiArrowDropUpLine className="text-[30px]" />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;

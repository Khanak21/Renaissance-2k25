import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import "./CardTest.css";
const Details = (prop) => {
  return (
    <>
      <div className="z-10 cursor-pointer all">
        <div className="card">
          <div className="overflow-hidden transition duration-500 ease-in-out imgBx">
            <img src={prop.image} alt="images" className="object-cover transition duration-500 ease-in-out hover:scale-105" />
          </div>
          <div className="flex flex-col justify-between details">
            <h2 className="tracking-wide text-custom-warm">
              {prop.name}
            </h2>
            <div className="info text-custom-secondary">
              <div className="flex justify-center gap-2">
                <a href={prop.linkedin} target="__blank">
                  <AiFillLinkedin className="text-xl transition duration-300 ease-linear md:text-2xl hover:text-linkedin hover:-translate-y-1" />
                </a>
                <a href={prop.instagram} target="__blank">
                  <AiFillInstagram className="text-xl transition duration-300 ease-linear md:text-2xl hover:text-instagram hover:-translate-y-1" />
                </a>
                <a href={prop.facebook} target="__blank">
                  <AiFillFacebook className="text-xl transition duration-300 ease-linear md:text-2xl hover:text-facebook hover:-translate-y-1" />
                </a>
                <a href={prop.twitter} target="__blank">
                  <BsTwitter className="text-xl transition duration-300 ease-linear md:text-2xl hover:text-twitter hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import speakersData from "../components/Speakers/data"; // Importing speaker data from data.js
import StickyNavbar from "../components/StickyNavbar/StickyNavbar";
import Footer from "../components/Footer/Footer";

const AllSpeakersPage = () => {
  // Card component for rendering each speaker
  const Card = ({ img, name, post, linkedin, twitter, facebook }) => (
    <div className="flex flex-col bg-white shadow-lg rounded-3xl overflow-hidden p-4 w-[80%] md:w-[40%] lg:py-4 lg:px-4 lg:w-[17%]">
      {/* Profile Picture */}
      <div className="flex justify-center hover:cursor-pointer hover:scale-105 ease-in-out duration-300">
        {/* Image of the speaker */}
        <img
          className="w-[200px] h-[200px] p-4 pt-0 object-cover rounded-full border-4 border-white"
          src={img} // Image source
          alt="Profile" // Alternative text for accessibility
        />
      </div>

      {/* Speaker Name and Position */}
      <div className="flex-grow flex flex-col justify-between items-center">
        <div className="text-center">
          {/* Speaker's name */}
          <h2 className="text-lg font-bold">{name}</h2>
          {/* Speaker's position/title */}
          <div className="text-base text-gray-600">{post}</div>
        </div>

        {/* Social Handles */}
        <div className="flex justify-center mt-5">
          {/* LinkedIn handle */}
          <a
            href={linkedin} // LinkedIn profile URL
            target="_blank" // Opens link in a new tab
            className="mx-2 text-gray-600 hover:text-blue-500"
          >
            <BsLinkedin className="text-[#2F3E46] shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-800 text-xl" />
          </a>
          {/* Twitter handle */}
          <a
            href={twitter} // Twitter profile URL
            target="_blank" // Opens link in a new tab
            className="mx-2 text-gray-600 hover:text-pink-500"
          >
            <BsTwitter className="text-[#2F3E46] shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-400 text-xl" />
          </a>
          {/* Facebook handle */}
          <a
            href={facebook} // Facebook profile URL
            target="_blank" // Opens link in a new tab
            className="mx-2 text-gray-600 hover:text-blue-500"
          >
            <BsFacebook className="text-[#2F3E46] rounded-full shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-600 text-xl" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="sticky top-0 z-[100]">
        <StickyNavbar />
      </div>

      <div className="pt-[4rem] pb-[4rem] px-4 lg:px-20 bg-[#27282A]">
        {/* Title */}
        <h2 className="font-bold text-2xl lg:text-2xl text-center pb-5 text-white">
          SPEAKERS
        </h2>
        {/* Speaker cards */}
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {/* Mapping over all elements of the speakersData array */}
          {speakersData.map((speaker) => (
            <Card
              key={speaker.id} // Unique key for React list
              img={speaker.img.src} // Speaker's image source
              name={speaker.name} // Speaker's name
              post={speaker.post} // Speaker's position/title
              linkedin={speaker.linkedin} // Speaker's LinkedIn profile URL
              twitter={speaker.twitter} // Speaker's Twitter profile URL
              facebook={speaker.facebook} // Speaker's Facebook profile URL
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllSpeakersPage;

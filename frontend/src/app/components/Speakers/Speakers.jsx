import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import speakersData from "./data"; // Importing speaker data from data.js
import Link from "next/link";

const Speakers = () => {
  // Card component for rendering each speaker
  const Card = ({ img, name, post, linkedin, twitter, facebook }) => (
    <div className="max-w-lg w-[80%] md:w-[40%] lg:w-[26%] mx-auto p-5 m-5 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Profile Picture */}
      <div className="flex gap-2 justify-center hover:cursor-pointer hover:scale-105 ease-in-out duration-300">
        {/* Image of the speaker */}
        <img
          className="w-[200px] h-[200px] p-4 object-cover rounded-full border-4 border-white"
          src={img} // Image source
          alt="Profile" // Alternative text for accessibility
        />
      </div>

      {/* Speaker Name and Position */}
      <div className="text-center mb-4">
        {/* Speaker's name */}
        <h2 className="text-lg font-bold">{name}</h2>
        {/* Speaker's position/title */}
        <p className="text-gray-600">{post}</p>
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
  );

  return (
    <div className="bg-[#27282A]">
      {/* Title */}
      <h2 className="font-bold text-3xl lg:text-5xl text-center pb-5 text-white">
        SPEAKERS
      </h2>
      {/* Speaker cards */}
      <div className="flex lg:px-20 content-between flex-wrap">
        {/* Mapping over the first three elements of the speakersData array */}
        {speakersData.slice(0, 3).map((speaker) => (
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

      {/* View More Button */}
      <div className="flex justify-center mt-5">
        <Link
          href="/allspeakers"
          className="p-3 border-2 bg-white border-white mt-6 shadow-[inset_0_0_0_0_rgb(132,169,140)] hover:border-[#84A98C] hover:shadow-[inset_15em_0_0_0_rgb(132,169,140)] transition ease-in-out delay-50 duration-300"
        >
          <button className="mr-2 font-bold">View More</button>
          {/* Arrow icon with jiggling animation */}
        </Link>
      </div>
    </div>
  );
};

export default Speakers;

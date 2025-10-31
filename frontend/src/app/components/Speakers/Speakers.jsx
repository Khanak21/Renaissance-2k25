import React from "react";
import { BsLinkedin } from "react-icons/bs";
import speakersData from "./data"; // Importing speaker data from data.js
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Card component for rendering each speaker
export const Card = ({ img, name, post, linkedIn }) => (
  <section className="lg:w-[22%] w-full mx-auto lg:m-0 duration-500 transform bg-white shadow-lg rounded-3xl">
    <section className="flex flex-col h-full max-w-sm mx-auto overflow-hidden">
      <div className="flex justify-center duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
        <Image
          className="object-cover object-top w-full h-52"
          src={`${img}`}
          alt="renaissance mnnit speakers"
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center justify-between flex-grow p-4 my-auto">
        <div className="text-center">
          {/* Speaker's name */}
          <h2 className="text-base font-bold lg:text-lg">{name}</h2>
          {/* Speaker's position/title */}
          <div className="text-base text-gray-600 whitespace-pre-line">{post}</div>
        </div>
        {/* Social Handles */}
        <div className="flex justify-center mt-5">
          {/* LinkedIn handle */}
          <a
            href={linkedIn} // LinkedIn profile URL
            target="_blank" // Opens link in a new tab
            className="mx-2 text-gray-600 hover:text-blue-500"
          >
            <BsLinkedin className="text-[#2F3E46] shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-800 text-xl" />
          </a>
        </div>
      </div>
    </section>
  </section>
  // <div className="flex flex-col p-4 overflow-hidden bg-white shadow-lg rounded-3xl lg:py-4 lg:px-4 w-[22%]">
  //   {/* Profile Picture */}
  //   <div className="flex justify-center duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
  //     {/* Image of the speaker */}
  //     <img
  //       className="object-cover w-full h-full p-4 pt-0 border-4 border-white "
  //       src={img} // Image source
  //       alt="Profile" // Alternative text for accessibility
  //     />
  //   </div>

  //   {/* Speaker Name and Position */}
  //   <div className="flex flex-col items-center justify-between flex-grow">
  //     <div className="text-center">
  //       {/* Speaker's name */}
  //       <h2 className="text-lg font-bold">{name}</h2>
  //       {/* Speaker's position/title */}
  //       <div className="text-base text-gray-600">{post}</div>
  //     </div>

  //     {/* Social Handles */}
  //     <div className="flex justify-center mt-5">
  //       {/* LinkedIn handle */}
  //       <a
  //         href={linkedin} // LinkedIn profile URL
  //         target="_blank" // Opens link in a new tab
  //         className="mx-2 text-gray-600 hover:text-blue-500"
  //       >
  //         <BsLinkedin className="text-[#2F3E46] shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-800 text-xl" />
  //       </a>
  //       {/* Twitter handle */}
  //       <a
  //         href={twitter} // Twitter profile URL
  //         target="_blank" // Opens link in a new tab
  //         className="mx-2 text-gray-600 hover:text-pink-500"
  //       >
  //         <BsTwitter className="text-[#2F3E46] shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-400 text-xl" />
  //       </a>
  //       {/* Facebook handle */}
  //       <a
  //         href={facebook} // Facebook profile URL
  //         target="_blank" // Opens link in a new tab
  //         className="mx-2 text-gray-600 hover:text-blue-500"
  //       >
  //         <BsFacebook className="text-[#2F3E46] rounded-full shadow-2xl hover:p-[2px] cursor-pointer hover:text-blue-600 text-xl" />
  //       </a>
  //     </div>
  //   </div>
  // </div>
);

const Speakers = () => {
  return (
    <div className="pt-12 bg-custom-primary ">
      {/* Title */}
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center md:justify-between items-center px-[3rem] md:px-[3rem] lg:px-[7.4rem]">
          <h2 className="text-lg font-bold text-center text-white lg:text-2xl">
            SPEAKERS
          </h2>
          <div className="justify-center hidden md:flex lg:block">
            <Link href="/allspeakers">
              <button className="p-3 uppercase border-[1px] bg-custom-primary border-white shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:border-custom-accent hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300 text-base text-white">
                View All Speakers
              </button>
              {/* Arrow icon with jiggling animation */}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Speaker cards */}
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center w-full pt-4">
          <div className="grid grid-cols-1 gap-10 px-12 sm:grid-cols-2 sm:px-12 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 lg:px-20">
            {/* Mapping over the first three elements of the speakersData array */}
            {speakersData.slice(0, 7).map((speaker) => (
              <Card
                key={speaker.id} // Unique key for React list
                img={speaker.img} // Speaker's image source
                name={speaker.name} // Speaker's name
                post={speaker.post} // Speaker's position/title
                linkedIn={speaker.linkedIn} // Speaker's LinkedIn profile URL
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* View More Button */}
      <div className="flex justify-center mt-5 md:hidden lg:hidden">
        <Link
          href="/allspeakers"
          className="p-3 border-[1px] bg-custom-primary border-custom-light mt-6 shadow-[inset_0_0_0_0_rgb(219,84,97)] hover:border-custom-accent hover:shadow-[inset_15em_0_0_0_rgb(219,84,97)] transition ease-in-out delay-50 duration-300"
        >
          <button className="mr-2 text-base text-white">
            View All Speakers
          </button>
          {/* Arrow icon with jiggling animation */}
        </Link>
      </div>
    </div>
  );
};

export default Speakers;

import React, { useState, useEffect } from "react";
import data from "./data";
import "./Testimonial.css";
import Image from "next/image";

const Testimonials = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    let slider = setInterval(() => {
      setIndex(index + 1);
      if (index < 0) setIndex(lastIndex);
      if (index === lastIndex) setIndex(0);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people]);

  const prevSlide = () => {
    if (index === 0) setIndex(people.length - 1);
    else setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index === people.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center align-middle overflow-x-hidden overflow-y-hidden w-full h-[80%] items-center bg-[#27282A] md:px-20 sm:justify-around">
      {/* prev arrow for desktop view */}
      <div className="hidden mx-2 section-left sm:block">
        <button
          className="duration-300 ease-in-out hover:cursor-pointer hover:scale-125"
          onClick={prevSlide}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="currentColor"
            color="white"
            className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-.5M19.5 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      {/* container of cards */}
      <div className="relative flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-hidden section-center sm:w-4/6">
        {people.map((item, indexPeople) => {
          const { id, name, title, headline, text, src } = item;
          let position = "";
          if (indexPeople === index) position = "activeSlide w-full flex-grow";
          if (
            indexPeople === index + 1 ||
            (index === people.length - 1 && indexPeople === 0)
          )
            position = "nextSlide w-full flex-grow";
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          )
            position = "lastSlide w-full flex-grow";

          return (
            <article className={`${position} duration-500`} key={id}>
              <div className="my-2">
                <div className="relative flex flex-col items-center justify-center px-2 py-8 m-5 bg-white bg-testimonial rounded-3xl lg:flex-row lg:justify-between">
                  <div className="z-10 flex flex-col items-center justify-center w-full lg:w-2/5 md:pl-6">
                    <div className="mb-2 duration-300 ease-in-out hover:cursor-pointer hover:scale-105 ">
                      <Image
                        src={src}
                        alt={name}
                        height={500}
                        width={500}
                        className="object-cover w-40 h-40 rounded-xl lg:w-60 lg:h-60"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-base font-bold text-center sm:text-lg lg:mt-8 ">
                      {name}
                    </div>
                    <div className="mb-4 text-base text-center text-wrap">
                      {title}
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center flex-grow w-full lg:w-3/5">
                    <div className="flex flex-col justify-center">
                      <div className="text-base font-bold text-center sm:text-lg lg:mb-4">
                        {headline}
                      </div>
                      <div className="items-center justify-center">
                        <p className="text-base text-center md:px-6 text-wrap">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-0 hidden lg:block top-10 right-10">
                    <img
                      className="w-32 h-32"
                      src={`/Testimonials/quote.svg`}
                      alt=""
                    />
                  </div>
                  <div className="absolute z-0 top-[55%] left-5 lg:hidden">
                    <img
                      className="w-16 h-16"
                      src={`/Testimonials/quote_start.svg`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* next arrow for desktop view */}
      <div className="hidden mx-2 section-right sm:block">
        <button
          className="duration-300 ease-in-out hover:cursor-pointer hover:scale-125"
          onClick={nextSlide}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="currentColor"
            color="white"
            className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 .1M22.5 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-around w-1/2 mx-2 mt-4 sm:hidden">
        {/* prev arrow for mobile view */}
        <div className="relative section-left bottom-8">
          <button onClick={prevSlide} className="hover:cursor-pointer">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="currentColor"
              color="white"
              className="h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-.5M19.5 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        {/* next arrow for mobile view */}
        <div className="relative section-left bottom-8">
          <button onClick={nextSlide} className="hover:cursor-pointer">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="currentColor"
              color="white"
              className="h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 .1M22.5 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

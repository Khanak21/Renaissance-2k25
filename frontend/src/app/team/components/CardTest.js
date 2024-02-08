import React from "react";
import "./CardTest.css";
import Details from "./Details";
const CardTest = () => {
  return (
    <>
      <h2 className="text-lg tracking-widest uppercase design text-custom-secondary md:text-2xl">E-Cell Convener</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-x-36 gap-y-4 ">
        <Details
          image={`/TeamsPage/anushka.jpeg`}
          name="Anushka"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/anushka-f/"
          instagram="https://www.instagram.com/anushka_anotherhuman/"
        />
        <Details
          image={`/TeamsPage/anubhav.jpg`}
          name="Anubhav Shrivastava"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/ashrivastava1110/"
          instagram="https://www.instagram.com/a.shrivastava.1110/"
        />
      </div>
      <h2 className="mt-4 text-lg tracking-widest uppercase lg:mt-10 design text-custom-secondary md:text-2xl">Event Leads</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-x-36 gap-y-4 ">
        <Details
          image={`/TeamsPage/ishita.jpg`}
          name="Ishita Agrawal"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/ishita1505/"
          instagram="https://www.instagram.com/"
        />
        <Details
          image={`/TeamsPage/shruti.jpg`}
          name="Shruti Bhateja"
          facebook="https://www.facebook.com/shruti.bhateja.75"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/shruti-bhateja/"
          instagram="https://www.instagram.com/shruti.musings/"
        />
      </div>
      <h2 className="mt-4 text-lg tracking-widest uppercase lg:mt-10 design text-custom-secondary md:text-2xl">Design Team Leads</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-x-36 gap-y-4 ">
        <Details
          image={`/TeamsPage/kartikey.jpg`}
          name="Kartikey Gupta"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/kartikey2991/"
          instagram="https://www.instagram.com/kartikeygg/"
        />
        <Details
          image={`/TeamsPage/silkie.jpg`}
          name="Silkie Agarwal"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/silkie-agarwal/"
          instagram="https://www.instagram.com/agarwalsilkie/"
        />
      </div>
      <h2 className="mt-4 text-lg tracking-widest uppercase lg:mt-10 design text-custom-secondary md:text-2xl">Web Team Lead</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-x-36 gap-y-4 ">
        <Details
          image={`/TeamsPage/neeraj.jpg`}
          name="Neeraj Chatterjee"
          facebook="https://www.facebook.com/neerajchatterjee2301/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/neeraj-chatterjee/"
          instagram="https://www.instagram.com/imchatterjeeneeraj/"
        />
      </div>
      <h2 className="mt-4 text-lg tracking-widest uppercase lg:mt-10 design text-custom-secondary md:text-2xl">Networking Team Lead</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-x-36 gap-y-4 ">
        <Details
          image={`/TeamsPage/somil.jpg`}
          name="Somil Goyal"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/in/somil-goyal/"
          instagram="https://www.instagram.com/_somil1805_/"
        />
      </div>
    </>
  );
};

export default CardTest;

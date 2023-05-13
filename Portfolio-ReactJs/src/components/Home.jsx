import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Logo from "../assets/logo.png";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full">
        <p className="text-teal-300 sm:text-2xl text-1xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Naveen Kumar Chitturi
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0] my-2">
          I'm a Software Engineer/ReactJs Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a React developer specializing in building (and occasionally
          designing) react digital experiences. Currently, I’m focused on
          building responsive ReactJs applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt="Logo Image"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "175px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

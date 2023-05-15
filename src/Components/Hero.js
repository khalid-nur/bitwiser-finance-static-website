import React from "react";
import homepageImage from "../assets/homepage-hero-img.png";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="bg-[#F6F6F4] py-20">
      <div className="container m-auto p-4 flex flex-col items-center justify-center md:flex-row">
        <div className=" flex flex-col">
          <h2 className=" text-color-secondary text-lg lg:text-2xl uppercase font-bold mb-2 pl-1">
            Growing With Data Analytics
          </h2>
          <h1 className="text-color-primary text-4xl lg:text-6xl font-bold  mb-4">
            Grow with data.{" "}
          </h1>
          <div className="flex items-center">
            <p className="text-color-primary text-xl font-bold lg:text-3xl mb-2 pl-1">
              Fast, flexible financing for
            </p>
            <Typed
              className="text-[#868e96] text-xl font-bold lg:text-3xl mb-2 pl-1"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="text-[#868e96] lg:text-2xl mb-4 pl-1">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms
          </p>
          <div>
            <button className="bg-color-primary text-color-secondary w-[150px] py-2 px-3 rounded-lg ">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img className="" src={homepageImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

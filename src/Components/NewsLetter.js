import React from "react";

const Newsletter = () => {
  return (
    <div className=" py-20">
      <div className="container m-auto px-4">
        <div className="flex flex-col justify-between lg:flex-row">
          <div>
            <h1 className="text-color-secondary text-3xl py-2 uppercase font-bold md:text-4xl  ">
              Want tips & tricks to optimize your flow?
            </h1>
            <p className="text-[#868e96]">
              Sign up to our newsletter and stay up to date
            </p>
          </div>
          <div className="my-4">
            <div className=" flex flex-col items-center gap-3 lg:flex-row">
              <input
                className="p-2 w-full border-2 border-black rounded-md focus:outline-none"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-color-primary text-color-secondary w-[150px] py-2 px-3 rounded-lg  ">
                Notify Me
              </button>
            </div>
            <p className="py-4 text-[#868e96]  ">
              We can bout the protection of your data.Read our{" "}
              <a className="text-color-secondary underline " href="/">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

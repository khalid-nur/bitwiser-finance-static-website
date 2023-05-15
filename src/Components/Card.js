import React from "react";
import singleUser from "../assets/single.png";
import doubleUser from "../assets/double.png";
import tripleUser from "../assets/triple.png";

const Card = () => {
  return (
    <div className="bg-[#F6F6F4] py-20">
      <div className="container m-auto px-4 md:grid grid-cols-3 gap-8">
        <div className="  shadow-lg flex items-center flex-col p-4 my-16 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={singleUser} alt="" />
          <h2 className="text-2xl font-bold py-8">Single User</h2>
          <p className="text-4xl font-bold">$149</p>
          <div>
            <ul className=" font-medium">
              <li className="py-2 border-b border-gray-300 mx-8 mt-8">
                500 GB Storage
              </li>
              <li className="py-2 border-b border-gray-300 mx-8">
                1 User Allowed{" "}
              </li>
              <li className="py-2 border-b border-gray-300 mx-8">
                Send up to 2GB
              </li>
            </ul>
          </div>
          <button className="bg-color-primary text-color-secondary my-6 w-[200px] py-2 px-3 rounded-lg">
            Start Trail
          </button>
        </div>

        <div className=" shadow-lg bg-[#E4E5E5] flex items-center flex-col p-4 my-16 rounded-lg hover:scale-105 duration-300 md:my-10">
          <img className="w-20 mx-auto mt-[-3rem]" src={doubleUser} alt="" />
          <h2 className="text-2xl font-bold py-8">Partnership</h2>
          <p className="text-4xl font-bold">$199</p>
          <div>
            <ul className=" font-medium">
              <li className="py-2 border-b border-gray-300 mx-8 mt-8">
                1 TB Storage
              </li>
              <li className="py-2 border-b border-gray-300 mx-8">
                3 User Allowed{" "}
              </li>
              <li className="py-2 border-b border-gray-300 mx-8">
                Send up to 10GB
              </li>
            </ul>
          </div>
          <button className="bg-color-secondary text-color-primary font-bold my-6 w-[200px] py-2 px-3 rounded-lg">
            Start Trail
          </button>
        </div>

        <div className="  shadow-lg flex items-center flex-col p-4 my-16 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={tripleUser} alt="" />
          <h2 className="text-2xl font-bold py-8">Group Account</h2>
          <p className="text-4xl font-bold">$299</p>
          <div>
            <ul className=" font-medium">
              <li className="py-2 border-b border-gray-300 mx-8 mt-8">
                5 TB Storage
              </li>
              <li className="py-2 border-b border-gray-300 mx-8">
                10 User Allowed{" "}
              </li>
              <li className="py-2 border-b border-gray-300 mx-8">
                Send up to 20GB
              </li>
            </ul>
          </div>
          <button className="bg-color-primary text-color-secondary my-6 w-[200px] py-2 px-3 rounded-lg">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

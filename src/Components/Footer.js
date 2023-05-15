import React from "react";
import image from "../assets/bitwiser-icon.png";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-20">
      <div className="container m-auto px-4 grid lg:grid-cols-3 gap-8">
        <div>
          <img className=" w-40 " src={image} alt="bitwiser-icon" />
          <p className=" text-[#868e96] py-4 pl-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium tempora provident saepe doloremque odio. Ipsa suscipit
            mollitia est repellat quod.
          </p>
          <div className="flex justify-between pl-1 my-6 md:w-[75%]">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="flex justify-between mt-6 lg:col-span-2 ">
          <div>
            <h2 className="font-medium ">Solutions</h2>
            <ul>
              <li className="py-2 cursor-pointer">Analytics</li>
              <li className="py-2 cursor-pointer">Marketing</li>
              <li className="py-2 cursor-pointer">Commerce</li>
              <li className="py-2 cursor-pointer">Insights</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium ">Support</h2>
            <ul>
              <li className="py-2 cursor-pointer">Pricing</li>
              <li className="py-2 cursor-pointer">Documentation</li>
              <li className="py-2 cursor-pointer">Guides</li>
              <li className="py-2 cursor-pointer">API Status</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium ">Company</h2>
            <ul>
              <li className="py-2 cursor-pointer">About</li>
              <li className="py-2 cursor-pointer">Blog</li>
              <li className="py-2 cursor-pointer">Jobs</li>
              <li className="py-2 cursor-pointer">Press</li>
              <li className="py-2 cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium ">Legal</h2>
            <ul>
              <li className="py-2 cursor-pointer">Claim</li>
              <li className="py-2 cursor-pointer">Policy</li>
              <li className="py-2 cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

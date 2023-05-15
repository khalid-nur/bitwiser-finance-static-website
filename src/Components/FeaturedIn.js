import React from "react";
import crypotocom from "../assets/crypotocom.png";
import financialtimes from "../assets/financialtimes.png";
import wsj from "../assets/wsj.png";
import coindesk from "../assets/coindesk.png";
import fireblocks from "../assets/fireblocks.png";

const FeaturedIn = () => {
  return (
    <div className=" py-20">
      <div className="container m-auto px-4">
        <h2 className="text-color-secondary text-sm uppercase font-medium text-center mb-5">
          As Featured In
        </h2>
        <div className=" grid grid-cols-2 gap-4 items-center justify-around md:grid-cols-3 lg:flex">
          <img className=" w-60  md:w-48 " src={crypotocom} alt="" />
          <img className=" w-60  md:w-48" src={financialtimes} alt="" />
          <img className=" w-60  md:w-48" src={wsj} alt="" />
          <img className=" w-60  md:w-48" src={coindesk} alt="" />
          <img className=" w-60  md:w-48" src={fireblocks} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;

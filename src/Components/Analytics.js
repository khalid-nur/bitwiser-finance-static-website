import React from "react";
import AnalyticsImage from "../assets/Setup Analytics-cuate.png";

const Analytics = () => {
  return (
    <div className="bg-[#F6F6F4] py-10">
      <div className="container m-auto py-16 px-4 flex flex-col items-center lg:flex-row  gap-2 ">
        <img className=" w-[500px] mx-auto my-4" src={AnalyticsImage} alt="" />
        <div className="  ">
          <h2 className="text-color-secondary text-sm  uppercase font-bold ">
            Data Analytics Dashboard
          </h2>
          <h1 className="text-color-primary text-4xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-[#868e96]  mb-4 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit urna sed neque egestas, ut malesuada ligula malesuada.
            Aenean aliquam venenatis lectus ut malesuada. Sed convallis mattis
            nisl, nec varius ipsum pulvinar vitae. Nullam vehicula erat eu lorem
            consectetur semper. Nulla facilisi. Donec at lectus odio. Mauris
            pretium turpis eu.
          </p>
          <button className="bg-color-primary text-color-secondary w-[150px] py-2 px-3 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

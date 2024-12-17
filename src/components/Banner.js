import React from "react";
import bannerImage from "../assets/1.png";

function Banner() {
  return (
    <div className="relative py-16 px-4 text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          opacity: 0.3,
        }}
      ></div>
      <div className="relative z-10 text-black">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Optimize Your Meal
        </h1>
        <h2 className="text-sm md:text-sm font-medium">
          Select Meals to Add in Week. You will be able to edit, modify, and
          change the Meal Weeks.
        </h2>
      </div>
    </div>
  );
}

export default Banner;

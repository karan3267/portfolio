import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const {intro}=portfolioData;
  const {welcomeText,title}=intro;
  return (
    <div className="">
      <h1 className="text-6xl md:text-4xl sm:text-3xl text-color2 py-4">
        {welcomeText}
      </h1>
      <h1 className="text-white w-2/3 sm:w-full sm:text-5xl text-9xl md:text-6xl font-bold text-wrap">
        {title}
      </h1>
    </div>
  );
}

export default Intro;

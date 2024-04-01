import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { animationUrl, description1, skills } = about;
  return (
    <div className="py-5">
      <SectionTitle title={"About"} />
      <div className="flex sm:block">
        <div className="w-1/2 lg:w-full">
          <dotlottie-player
            src={animationUrl}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <p className="text-white w-1/2 text-2xl lg:w-full md:text-xl sm:text-base flex items-center justify-center">
          {description1}
        </p>
      </div>
      <div className="text-teritary py-5">
        <h1 className="text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-10">
          {skills.map((skill) => (
            <div className=" border border-teritary py-4 px-6">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

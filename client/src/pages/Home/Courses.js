import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const { portfolioData } = useSelector((state) => state.root);
  const {courses} = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="py-5">
      <SectionTitle title={"Courses"} />
      <div className="flex sm:flex-col py-10 gap-10">
        <div className=" flex flex-col gap-10 border-l-2 border-color1 sm:border-l-0 sm:flex-row sm:overflow-x-scroll">
          {courses.map((item, index) => (
            <div
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <h1
                className={`text-xl p-2 hover:text-teritary hover:cursor-pointer ${
                  activeIndex === index
                    ? "text-teritary border-l-4 md:border-b-4 md:border-l-0 border-teritary -ml-[3px] rounded bg-[#3dfa8c2e]"
                    : "text-white"
                }`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 md:flex-col">
          <div className="flex flex-col items-cemter justify-end text-white gap-5">
            <h1 className="text-xl">{courses[activeIndex].title}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <button className="bg-teritary rounded p-2">
                Go to Project
              </button>
            </div>
          </div>
        </div>
          <img
            src={courses[activeIndex].image}
            className="h-60 w-72"
            alt="music library app"
          />
      </div>
    </div>
  );
}

export default Projects;

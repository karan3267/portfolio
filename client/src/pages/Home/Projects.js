import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const { portfolioData } = useSelector((state) => state.root);
  const {projects} =portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="py-5">
      <SectionTitle title={"Projects"} />
      <div className="flex sm:flex-col py-10 gap-20">
        <div className="flex flex-col lg:flex-none flex-initial gap-10 border-l-2 border-color1 sm:border-l-0 sm:flex-row sm:overflow-x-scroll">
          {projects.map((item, index) => (
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
          <img
            src={projects[activeIndex].image}
            className="h-60 w-72"
            alt="music library app"
          />
          <div className="flex flex-col items-cemter justify-end text-white gap-5">
            <h1 className="text-xl">{projects[activeIndex].title}</h1>
            <h1 className="text-lg">{projects[activeIndex].description}</h1>
            <div>
              <button className="bg-teritary rounded p-2">Go to Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

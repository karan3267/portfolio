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
        <div className="flex flex-col gap-10 border-l-2 border-color1 sm:border-l-0 sm:flex-row sm:overflow-x-scroll">
          {projects.map((item, index) => (
            <div
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <h1
                className={`text-xl px-3 py-2 hover:cursor-pointer w-40 md:w-32 ${
                  activeIndex === index
                    ? "text-white border-l-4 md:border-b-4 md:border-l-0 border-teritary bg-teritary -ml-[3px] rounded "
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
              <a className="bg-teritary rounded p-2" href={projects[activeIndex].link}>Go to Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

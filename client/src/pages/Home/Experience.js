import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experience() {
  const { portfolioData } = useSelector((state) => state.root);
  const {experience} = portfolioData;
  const experiences=experience;

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="py-5">
      <SectionTitle title={"Experiences"} />
      <div className="flex sm:flex-col py-10 gap-10">
        <div className="flex flex-col gap-10 border-l-2 border-color1 sm:border-l-0 sm:flex-row sm:overflow-x-scroll">
          {experiences.map((item, index) => (
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
                {item.period}
              </h1>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col items-cemter justify-end ml-10 text-white gap-5">
            <h1 className="text-2xl font-semibold">
              {experiences[activeIndex].company}
            </h1>
            <h1 className="text-xl">{experiences[activeIndex].title}</h1>
            <h1 className="text-lg">
              {experiences[activeIndex].description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

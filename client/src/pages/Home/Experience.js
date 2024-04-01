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
        <div className=" flex flex-col  my-5 gap-10 border-l-2 border-color1 sm:flex-row sm:overflow-x-scroll">
          {experiences.map((item, index) => (
            <div
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <h1
                className={`text-xl p-2 hover:text-teritary hover:cursor-pointer ${
                  activeIndex === index
                    ? "text-teritary border-l-4 border-teritary -ml-[3px] rounded bg-[#3dfa8c2e]"
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

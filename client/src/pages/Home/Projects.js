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
          <div
            id="default-carousel"
            class="relative w-full"
            data-carousel="slide"
          >
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* <!-- Item 1 --> */}
              
              {portfolioData[activeIndex].projects.image.map((item) => (
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  {console.log({ item })}
                  <img
                    src={item}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              ))}
            </div>
            {/* <!-- Slider indicators --> */}
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>

          <div className="flex flex-col items-cemter justify-end text-white gap-5">
            <h1 className="text-xl">{projects[activeIndex].title}</h1>
            <h1 className="text-lg">{projects[activeIndex].description}</h1>
            <div>
              <a
                className="bg-teritary rounded p-2"
                href={projects[activeIndex].link}
              >
                Go to Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

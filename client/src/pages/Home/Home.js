import React, { useState } from "react";
import Header from "../../components/Header";
import About from "./About";
import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import Sider from "./Sider";
import { useSelector } from "react-redux";

export default function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  // console.log(document.getElementById('Intro'));  
  // const [atTOP, setAtTop] = useState(true);
  return (
    <div className="bg-dark">
      {/* <div
        className={`fixed bottom-3 right-3 rounded-full px-2 text-2xl bg-gray-600 hover:cursor-pointer ${atTOP?"hidden":""}`}
        onClick={() => {
          const Intro = document.getElementById('Intro');
          Intro.scrollIntoView({behavior :"smooth"});
        }}
      >
        ^
      </div> */}
      <Header />
      {portfolioData && (
        <div className="px-40 sm:px-10 lg:px-20 flex flex-col gap-y-20">
          <div id="Intro" >
            <Intro />
          </div>
          <div id="About">
            <About />
          </div>
          <div id="Portfolio">
            <Projects />
          </div>
          <div id="Experience">
            <Experience />
          </div>
          <Courses />
          <div id="Contact">
            <Contact />
          </div>
          <Footer />
          <Sider />
        </div>
      )}
    </div>
  );
}

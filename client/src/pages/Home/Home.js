import React from "react";
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
  return (
    <div className="bg-dark">
      <Header />
      {portfolioData && (
        <div className="px-40 sm:px-10 lg:px-20 flex flex-col gap-y-20">
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Courses />
          <Contact />
          <Footer />
          <Sider />
        </div>
      )}
    </div>
  );
}

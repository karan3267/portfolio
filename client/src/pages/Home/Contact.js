import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contacts } = portfolioData;
  const contact = contacts;
  return (
    <div>
      <SectionTitle title={"Contact"} />
      <div className="py-10 flex items-center justify-center md:flex-col md:gap-5 gap-20">
        <div className="">
          {Object.entries(contact).filter(([key, value])=>(key!=="_id")).map(([key, value]) => (
            <div className="text-white">
              {key} : {value},
            </div>
          ))}
        </div>
        <div className="w-60">
          <dotlottie-player
            src="https://lottie.host/8017ac06-9d8c-4234-aeef-3045cd4908ba/AlPSOTRyBx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;

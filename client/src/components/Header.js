import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const about = document.getElementById('About');
  // const experience = document.getElementById('Experience');
  // const portfolio = document.getElementById('Portfolio');
  // const contact = document.getElementById('Contact');

  const scroll = (lable) => {
    const element = document.getElementById(lable);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About" },
    { label: "Experience" },
    { label: "Portfolio" },
    { label: "Contact" },
  ];

  return (
    <div className="p-5 bg-dark flex items-center justify-between">
      <div className="text-lgreen">
        <img
          src="https://cdn-icons-png.flaticon.com/128/8142/8142734.png"
          alt="logo"
          width='45'
        />
      </div>

      {/* Desktop Navigation (conditionally shown) */}
      <ul
        className={`lg:hidden flex justify-center items-center gap-10 ${
          isMenuOpen ? "opacity-0" : "" // Hide on open
        }`}
      >
        {navLinks.map((item) => (
          <li key={item.label}>
            <div
              className="font-montserrat leading-normal text-lg text-white hover:bg-lgreen rounded-full px-4 py-2"
              onClick={() => {
                scroll(item.label);
              }}
            >
              {item.label}
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Button (conditionally shown) */}
      <div
        className={`hidden lg:block cursor-pointer ${
          isMenuOpen ? "opacity-0" : "" // Hide on open
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RxHamburgerMenu className="text-4xl text-white" />
      </div>

      {/* Mobile Navigation (conditionally rendered) */}
      {isMenuOpen && (
        <nav className="fixed top-20 right-20 rounded bg-color1">
          <div
            className="fixed px-8 py-4 cursor-pointer  top-0 right-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AiOutlineClose className="text-4xl text-white" />
          </div>
          <ul className="flex flex-col items-center justify-center h-full gap-4 p-3">
            {navLinks.map((item) => (
              <li key={item.label}>
                <div
                  className="font-montserrat leading-normal text-lg text-white hover:bg-lgreen rounded-full px-4 py-2"
                  onClick={() => {
                    scroll(item.label);
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;

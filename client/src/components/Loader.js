import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center fixed gap-5 h-screen w-screen bg-dark text-lgreen text-6xl md:text-4xl sm:text-3xl">
      <div className="k">K</div>
      <div className="r">R</div>
    </div>
  );
}

export default Loader;

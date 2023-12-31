import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex pt-28 justify-center min-h-screen bg-[#f7faff]">
        <div className="text-center bg-image-container">
          <h2 className="text-2xl text-[#4b81fb] font-bold mb-4 uppercase">
            About Us
          </h2>
          <h1 className="text-2xl md:text-6xl font-bold text-center text-[#201e62] w-[90%] mx-auto">
            Our mission is to Empower community health workers in Africa
          </h1>
          <p className="mt-10 text-[#73729c] text-lg font-medium text-center w-[85%] md:w-[55%] mx-auto">
            We understand the challenges that community health workers face in
            their day-to-day work. We are here to help you overcome these
            challenges and make your work easier.
          </p>
          <div>
            <button
              className="bg-[#4b81fb] text-white px-8 py-3 rounded-full mt-10 cursor-pointer"
              type="button"
            >
              <a href="">Get Started</a>
            </button>

            <button className="bg-[#f7faff] text-[#4b81fb] px-8 py-3 rounded-full mt-10 border-2 border-[#4b81fb] ml-5">
              Contact Us
            </button>
          </div>
        </div>
        {/* <div className="absolute right-0 top-0 w-full h-full bg-image-container-right"></div> */}
      </div>
    </>
  );
};

export default Hero;

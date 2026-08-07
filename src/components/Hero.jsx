import React from "react";
import coffee from "../assets/final-hero.jpg";
import coffee2 from "../assets/coffee-final.png";

function Hero() {
  return (
    <section
      className="w-full min-h-screen section-padding  bg-hero bg-cover bg-right bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),
          url(${coffee})
        `,
      }}
    >
      {/* Main Container */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center">

        {/* LEFT - CONTENT */}
        <div className="w-full lg:w-1/2 flex gap-4 flex-col justify-center items-center lg:items-start text-center lg:text-left">

          <h1 className="heading1 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Start Your
          </h1>

          <h2 className="heading2 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-text to-white bg-clip-text text-transparent">
              Coffee
            </span>
          </h2>

          <h3 className="heading3 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Journey
          </h3>

          <p className="text-white text-sm sm:text-base md:text-lg max-w-lg">
            Experience the rich taste and aroma of freshly brewed coffee.
            Every cup is made with passion and carefully selected beans.
          </p>

          <button className="bg-btn text-white font-semibold px-6 py-3 rounded-lg">
            Explore Coffee
          </button>

        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-full lg:w-1/2  flex justify-center items-center">

          <img
            src={coffee2}
            alt="Coffee"
            className="
            w-[100%]
            "
          />

          
<div className="absolute z-0 top-0  w-[40%] h-[50%] " style={{
  background: `rgba(255, 255, 255, 1.5)`,
  filter:"blur(750px)"
}}  ></div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
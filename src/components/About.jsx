import React from "react";
import profilePic from "../assets/profile-img.jpg";

const About = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center p-2 md:p-9 ">
        {/* Text Section */}
        <div className="text-[var(--maroon-color)] w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-[1rem] leading-6 text-justify">
            Hello, my name is{" "}
            <span className="formal-font-text" id="name">
              Mrutyunjaya Mishra
            </span>
            . I am 53 years old and photography has been a part of my journey
            for many years. I love capturing everyday moments, beautiful places,
            and genuine emotions that tell simple yet meaningful stories.
            Through my lens, I try to preserve memories that people can look
            back on and feel connected to. Photography gives me joy, peace, and
            a way to share the beauty I see in the world with others.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profilePic}
            alt="Mrutyunjaya Mishra"
            className="w-60 sm:w-72 md:w-[28rem] rounded-2xl shadow-[10px_10px_0px_var(--gold-color)] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

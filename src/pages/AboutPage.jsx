import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import aboutImg from "../assets/hero-images/scenery3.JPG";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const AboutPage = () => {
  const msgRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    // Make sure elements exist before animating
    if (msgRef.current && paraRef.current) {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.3 },
      });

      tl.fromTo(
        msgRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 }
      ).fromTo(
        paraRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.6" // overlap so it's smooth
      );
    }
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <img src={aboutImg} className="w-full h-full object-cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbe2d4]/100 via-transparent to-[#fbe2d4]/100"></div>

        {/* Content */}
        <div className="absolute text-center px-4">
          <h1
            ref={msgRef}
            className="text-[2rem] sm:text-[4rem] text-[var(--gold-color)] drop-shadow-[2px_2px_4px_var(--maroon-color)]"
          >
            City Movie
          </h1>

          <p
            ref={paraRef}
            className="mt-4 w-[75vw] sm:w-[50vw] mx-auto text-sm bg-[var(--maroon-color)] p-2 text-[var(--gold-color)] rounded-2xl "
          >
            At City Movie, we specialize in creating unforgettable visual
            experiences.
            <br /> Our studio is built on a passion for storytelling, blending
            creativity with state-of-the-art technology to deliver exceptional
            photography and filmmaking services. From weddings and portraits to
            corporate shoots and cinematic productions, every project we take on
            is treated with the utmost care and dedication.
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default AboutPage;

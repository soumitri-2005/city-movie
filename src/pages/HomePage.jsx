import React from "react";
import About from "../components/About";
import ImageTrail from "../components/ImageTrail";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import HangingCards from "../components/HangingCards";
import { heroImages } from "../assets/hero-images/heroImg";

const HomePage = () => {
  return (
    <>
      <div>
        <div
          style={{
            height: "calc(100vh - 13vh)",
            position: "relative",
            overflow: "hidden",
            marginTop: "17px",
          }}
        >
          <ImageTrail
            items={[
              heroImages[0],
              heroImages[1],
              heroImages[2],
              heroImages[3],
              heroImages[4],
              heroImages[5],
              heroImages[6],
              heroImages[7],
            ]}
            variant={1}
          />
        </div>
        <About />
        <Events />
        <HangingCards />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

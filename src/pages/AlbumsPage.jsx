import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import album1 from "../assets/album-pictures/album1.jpg";
import album2 from "../assets/album-pictures/album2.jpg";
import album3 from "../assets/album-pictures/album3.jpg";
import album4 from "../assets/album-pictures/album4.jpg";
import album5 from "../assets/album-pictures/album5.jpg";
import album6 from "../assets/album-pictures/album6.jpg";
import album7 from "../assets/album-pictures/album7.jpg";
import album8 from "../assets/album-pictures/album8.jpg";
import album9 from "../assets/album-pictures/album9.jpg";
import album10 from "../assets/album-pictures/album10.jpg";
import album11 from "../assets/album-pictures/album11.jpg";
import album12 from "../assets/album-pictures/album12.jpg";
import album13 from "../assets/album-pictures/album13.jpg";
import album14 from "../assets/album-pictures/album14.jpg";
import album15 from "../assets/album-pictures/album15.jpg";
import album16 from "../assets/album-pictures/album16.jpg";
import AlbumsCards from "../components/AlbumsCards";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const AlbumsPage = () => {
  const albums = [
    { image1: album1, image2: album2 },
    { image1: album3, image2: album4 },
    { image1: album5, image2: album6 },
    { image1: album7, image2: album8 },
    { image1: album9, image2: album10 },
    { image1: album11, image2: album12 },
    { image1: album13, image2: album14 },
    { image1: album15, image2: album16 },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".album-card");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="text-center text-[var(--gold-color)] pt-[40px] mb-16">
          <h2 className="formal-font-text text-[1.7rem] sm:text-[2rem] lg:text-[3.6rem] tracking-[2px]">
            <span className="formal-font-text bg-[var(--maroon-color)]">
              Album of Memories
            </span>
            ...
          </h2>
        </div>

        <div ref={containerRef} className="mt-7 relative">
          {albums.map((album, index) => (
            <div
              key={index}
              className="album-card w-full h-[200px] mb-4 flex flex-col sm:flex-row gap-4"
            >
              <AlbumsCards album1={album.image1} album2={album.image2} />
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default AlbumsPage;

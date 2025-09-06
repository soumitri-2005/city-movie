import React, { useRef, useEffect, useState } from "react";
import { heroImages } from "../assets/hero-images/heroImg";

const data = [
  { id: 1, image: heroImages[0] },
  { id: 2, image: heroImages[1] },
  { id: 3, image: heroImages[2] },
  { id: 4, image: heroImages[3] },
  { id: 5, image: heroImages[4] },
  { id: 6, image: heroImages[5] },
  { id: 7, image: heroImages[6] },
];

export default function HangingCards() {
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [visibleCount, setVisibleCount] = useState(data.length);

  // Decide how many cards to show based on screen width
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 500) {
        setVisibleCount(1); // mobile
      } else if (width < 768) {
        setVisibleCount(3); // small tablets
      } else if (width < 1024) {
        setVisibleCount(5); // medium
      } else {
        setVisibleCount(7); // large
      }
    }

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute rope points for visible cards
  useEffect(() => {
    function updatePoints() {
      if (pathRef.current) {
        const path = pathRef.current;
        const pathLength = path.getTotalLength();
        const gap = pathLength / (visibleCount + 1);

        const newPoints = Array.from({ length: visibleCount }, (_, i) => {
          const { x, y } = path.getPointAtLength((i + 1) * gap);
          return { x, y };
        });

        setPoints(newPoints);
      }
    }

    updatePoints();
    window.addEventListener("resize", updatePoints);
    return () => window.removeEventListener("resize", updatePoints);
  }, [visibleCount]);

  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center flex-col">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-[1.7rem] sm:text-[2rem] lg:text-[3rem] p-4 text-center">
            35 years of Experienece
          </h2>
          <p className="text-sm sm:text-base text-[0.7rem] md:text-[1rem] leading-4 md:leading-6 text-center w-[80vw] mt-3">
            Our photo studio offers more than just pictures, it’s an experience.
            With professional lighting, modern equipment, and a comfortable
            setting, we capture authentic expressions and timeless memories.
            From portraits to themed shoots, every frame is carefully crafted to
            highlight your personality and style, giving you photographs that
            feel as special as the moments themselves.
          </p>
        </div>
        <div className="relative w-full h-56 -mt-10">
          {/* Rope Path */}
          <svg
            className="absolute top-1 left-0 w-full h-56"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d={`M 0 50 Q ${window.innerWidth / 2} 300 ${
                window.innerWidth
              } 50`}
              stroke="#cbd5e1"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>

          {/* Hanging Images */}
          {points.map((point, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{
                left: point.x,
                top: point.y,
                transform: "translate(-50%, 0)", // keep same horizontal alignment
              }}
            >
              {/* small string hanging from rope */}
              <div className="w-[7px] h-[20px] bg-[var(--gold-color)] border rounded-lg" />

              {/* your card same as before */}
              <div className="w-[160px] h-[160px] shadow-lg rounded-xl overflow-hidden border-4 border-white pb-4 bg-white">
                <img
                  src={data[i].image}
                  alt={`card-${i}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

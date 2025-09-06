import React, { useState } from "react";
import event1 from "../assets/event-vdos/event1.mp4";
import event2 from "../assets/event-vdos/event2.mp4";
import event3 from "../assets/event-vdos/event3.mp4";
import event4 from "../assets/event-vdos/event4.mp4";
import event5 from "../assets/event-vdos/event5.mp4";

const videos = [
  {
    src: event1,
    title: "Wedding Vibes",
    subtitle: "Joyful moments",
  },
  {
    src: event3,
    title: "Post-wedding Shoot",
    subtitle: "Memories in making",
  },
  {
    src: event2,
    title: "Birthday Bash",
    subtitle: "Fun and laughter",
  },
  {
    src: event4,
    title: "Bridal Shoot",
    subtitle: "Elegance and grace",
  },
  {
    src: event5,
    title: "Haldi Ceremony",
    subtitle: "Colorful traditions",
  },
];

const Events = () => {
  const [active, setActive] = useState(0);
  const [mutedStates, setMutedStates] = useState(
    Array(videos.length).fill(true) // start all videos muted
  );

  const toggleMute = (i) => {
    setMutedStates((prev) => prev.map((m, index) => (index === i ? !m : m)));
  };

  return (
    <>
      <h2 className="formal-font-text text-[1.7rem] sm:text-[2rem] lg:text-[3rem] text-center tracking-[2px] font-bold my-8">
        <span className="formal-font-text bg-[var(--gold-color)]">
          Some captured moments
        </span>
        ...
      </h2>
      <div className="flex flex-col md:flex-row w-full h-[80vh] overflow-hidden px-4 mt-16">
        {videos.map((video, i) => (
          <div
            key={i}
            className={`relative m-1 cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 drop-shadow-sm ${
              active === i ? "flex-[6]" : "flex-[1]"
            }`}
            onClick={() => setActive(i)}
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted={mutedStates[i]}
              className="w-full h-full object-cover"
            />
            {/* Overlay Info */}
            <div
              className={`absolute bottom-4 left-4 flex items-center transition-all duration-500 ${
                active === i ? "opacity-100" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="ml-3 text-white">
                <div className="font-bold text-lg">{video.title}</div>
                <div className="text-sm">{video.subtitle}</div>
              </div>
            </div>
            {/* Mute/Unmute Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent triggering setActive
                toggleMute(i);
              }}
              className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
            >
              {mutedStates[i] ? "🔊" : "🔇"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;

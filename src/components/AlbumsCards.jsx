import React from "react";

const AlbumsCards = (props) => {
  return (
    <>
      <div className="w-full border-3 border-[var(--maroon-color)] sm:w-1/2  h-full relative transition-all rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={props.album1}
          alt="sample-albums"
        />
      </div>
      <div className="w-full border-2 border-[var(--maroon-color)] sm:w-1/2  h-full relative transition-all rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={props.album2}
          alt="sample-albums"
        />
      </div>
    </>
  );
};

export default AlbumsCards;

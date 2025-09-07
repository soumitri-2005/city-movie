import React from "react";

const AlbumsCards = ({ album1, album2, onImageClick }) => {
  return (
    <>
      <div
        className="w-full border-2 border-[var(--maroon-color)] sm:w-1/2 h-full relative transition-all rounded-xl overflow-hidden cursor-pointer"
        onClick={() => onImageClick(album1)}
      >
        <img
          className="h-full w-full object-cover"
          src={album1}
          alt="sample-albums"
        />
      </div>
      <div
        className="w-full border-2 border-[var(--maroon-color)] sm:w-1/2 h-full relative transition-all rounded-xl overflow-hidden cursor-pointer"
        onClick={() => onImageClick(album2)}
      >
        <img
          className="h-full w-full object-cover"
          src={album2}
          alt="sample-albums"
        />
      </div>
    </>
  );
};


export default AlbumsCards;

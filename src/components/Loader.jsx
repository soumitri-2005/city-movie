import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-12 h-12 border-4 border-[var(--maroon-color)] border-t-[var(--gold-color)] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;

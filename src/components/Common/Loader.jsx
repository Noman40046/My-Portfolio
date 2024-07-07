import React from "react";

const Loader = () => {
  return (
    <div>
      <div class="flex justify-center items-center h-screen">
        <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    </div>
  );
};

export default Loader;

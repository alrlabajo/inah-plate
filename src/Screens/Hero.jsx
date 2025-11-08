import React from "react";
import RotatingText from "../Components/RotatingText";

const Hero = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex flex-col sm:flex-row items-center justify-center py-4 px-4 sm:px-6 lg:px-14 w-full max-w-6xl whitespace-nowrap">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-neutral-900">
          For your
        </h1>
        <RotatingText
          texts={["Personal", "Fan", "Business"]}
          mainClassName="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-teal-500 p-4 my-2 sm:mx-2 text-white rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-neutral-900">
          project needs
        </h1>
      </div>
    </>
  );
};

export default Hero;

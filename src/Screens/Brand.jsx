import React from "react";

const Brand = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8 mt-12 w-full">
        <div className="w-full space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left Column - Image */}
            <div className="flex items-center justify-center w-full">
              <div className="w-72 lg:w-full">
                <img
                  src="/brand.png"
                  alt="Logo and Branding Designs"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 w-full flex flex-col justify-center">
              <img
                src="/palette.png"
                alt="Color Palette"
                className="w-full h-auto object-cover"
              />
              <p className="text-neutral-800 text-sm text-justify">
                The brand features a playful wordmark with looping strokes,
                asterisks, and a transform tool frame—symbolizing joy,
                inclusivity, and creativity. Its vibrant palette of teal, aqua,
                peach, coral, and yellow evokes warmth and coastal freshness,
                while the marketing collaterals seamlessly blend color, texture,
                and design to express personality and leave a lasting impact.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <img
              src="/CALLINGCARD.jpg"
              alt="Calling Card"
              className="w-66 h-36 object-cover"
            />
            <img
              src="/NOTEBOOK.jpg"
              alt="Notebook"
              className="w-66 h-36 object-cover"
            />
            <img
              src="/NOTEPAD.jpg"
              alt="Notepad"
              className="w-66 h-36 object-cover"
            />
            <img
              src="/TRIFOLDBROCHURE.jpg"
              alt="Trifold Brochure"
              className="w-66 h-36 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;

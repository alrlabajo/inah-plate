import React from "react";
import { useState } from "react";
import TextType from "../Components/TextType/TextType";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const tabs = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "achievement", label: "Achievements" },
  ];

  const tabContent = {
    education: (
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-teal-500">
          Bachelor of Fine Arts Major in Visual Communication
        </h3>
        <p className="text-gray-600 italic text-xs">
          University of the East - Caloocan
        </p>
        <span className="text-xs font-semibold">2021 - Present</span>
      </div>
    ),
    experience: (
      <div>
        <div className="flex flex-wrap gap-6 sm:gap-8 items-center mb-4">
          <div>
            <h3 className="text-sm font-semibold text-red-400">
              Graphic Designer
            </h3>
            <p className="text-gray-600 italic text-xs">Freelance</p>
            <span className="text-xs font-semibold">2020 - Present</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-teal-500">
              Graphic Design Intern
            </h3>
            <p className="text-gray-600 italic text-xs">
              Widescope Advertising Agency
            </p>
            <span className="text-xs font-semibold">2025</span>
          </div>
        </div>
      </div>
    ),
    achievement: (
      <div className="md:space-y-1">
        <div>
          <h3 className="text-sm font-semibold text-red-400">
            Muestra Internacional de Video Arte Quito
          </h3>
          <p className="text-gray-600 italic text-xs">
            Assistant Director, Graphic Designer
          </p>
          <span className="text-xs font-semibold">Finalist - 2025</span>
      
      
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-12 w-full max-w-6xl">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Column - Image */}
            <div className="flex items-center justify-center w-full">
              <div className="w-72 lg:w-full">
                <img
                  src="/ID.png"
                  alt="Angelina Louise - Portfolio"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 w-full flex flex-col justify-center">
              {/* Text Content */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <TextType
                    text={["whoami ?!", "Angelina", "Inah"]}
                    typingSpeed={150}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                    className="text-4xl sm:text-4xl md:text-5xl font-semibold text-left"
                  />
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <p className="text-xs leading-relaxed text-neutral-900 montserrat-semibold">
                    I am a Graphic Designer from the Philippines, blending
                    music-inspired creativity with a versatile design style.
                    Beyond graphics, I capture moments through photography and
                    film.
                  </p>
                </div>
              </div>

              {/* Tabs Section */}
              <div className="flex flex-wrap border-b border-gray-300 text-xs md:text-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-2 px-4 focus:outline-none transition-colors duration-200 relative ${
                      activeTab === tab.id
                        ? "border-b-2 border-sky-900 text-sky-900 font-semibold -mb-px"
                        : "text-gray-600 hover:text-sky-900"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-2">{tabContent[activeTab]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

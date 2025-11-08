import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center w-full max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-14">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center my-8 gap-4 sm:gap-6 lg:gap-10">
          <h1 className="text-6xl lg:text-8xl font-semibold leading-none">
            Skills<span className="text-teal-500">.</span>
          </h1>
          <p className="text-sm leading-relaxed max-w-2xl">
            These are some of the softwares, skills and expertise I've acquired
            and honed over time through various projects, coursework, and
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h2 className="text-sm font-semibold mb-4 underline">
              Softwares
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
              <Icon
                icon="logos:adobe-photoshop"
                className="text-4xl hover:scale-110 transition-transform"
              />
              <Icon
                icon="logos:adobe-illustrator"
                className="text-4xl hover:scale-110 transition-transform"
              />
              <Icon
                icon="logos:adobe-indesign"
                className="text-4xl hover:scale-110 transition-transform"
              />
              <Icon
                icon="logos:adobe-lightroom"
                className="text-4xl hover:scale-110 transition-transform"
              />
              <Icon
                icon="logos:adobe-premiere"
                className="text-4xl hover:scale-110 transition-transform"
              />
              <Icon
                icon="logos:adobe-after-effects"
                className="text-4xl hover:scale-110 transition-transform"
              />
              <Icon
                icon="devicon:canva"
                className="text-4xl hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-4 underline">
              Expertise
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Photo Manipulation",
                "Photography",
                "Video Editing",
                "Motion Graphics",
                "Layout Design",
                "Publishing",

              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium border dark:border-neutral-300 border-zinc-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-4 underline">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Project Management",
                "Leadership",
                "Communication",
                "Time Management",
                "Critical Thinking",
                "Adaptability",
                "Collaboration",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium border dark:border-neutral-300 border-zinc-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

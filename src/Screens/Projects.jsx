import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

const projects = [
  {
    title: "House of Worship Christian Church Social Media Campaign",
    description: `I designed the social media graphics for our church, creating visually engaging content that reflects our faith, community, and weekly messages. Each design aims to inspire connection and encourage participation through thoughtful composition, color, and typography.`,
    image: "CHURCH/SUNDAYANNOUNCEMENTS/1.jpg",
    images: [
      "CHURCH/SUNDAYANNOUNCEMENTS/1.jpg",
      "CHURCH/SUNDAYANNOUNCEMENTS/2.jpg",
      "CHURCH/SUNDAYANNOUNCEMENTS/3.jpg",
      "CHURCH/SUNDAYANNOUNCEMENTS/4.jpg",
      "CHURCH/SUNDAYANNOUNCEMENTS/5.jpg",
      "CHURCH/SUNDAYANNOUNCEMENTS/6.jpg",
    ],
    category: "Social Media Campaign",
  },
  {
    title: "House of Worship Christian Church Youth Events",
    description: `I designed the social media graphics for our church, creating visually engaging content that reflects our faith, community, and weekly messages. Each design aims to inspire connection and encourage participation through thoughtful composition, color, and typography.`,
    image: "CHURCH/YOUTHEVENTS/1.jpg",
    images: [
      "CHURCH/YOUTHEVENTS/1.jpg",
      "CHURCH/YOUTHEVENTS/2.jpg",
      "CHURCH/YOUTHEVENTS/3.jpg",
      "CHURCH/YOUTHEVENTS/4.jpg",
    ],
    category: "Social Media Campaign",
  },
  {
    title: "Fan Projects",
    description: `I create print and digital materials for fan project events, blending design and storytelling to capture the excitement of each celebration. My work work includes event posters, banners, and social media visuals that connect fans and bring their shared passions to life.`,
    image: "FANPROJECTS/BAMBY1.jpg",
    images: [
      "FANPROJECTS/BAMBY1.jpg",
      "FANPROJECTS/HAMIN1.jpg",
      "FANPROJECTS/LOGOS.jpg",
      "FANPROJECTS/MXTX1.jpg",
      "FANPROJECTS/SHOWNUAYO.jpg",
      "FANPROJECTS/YEJUN1.jpg",
    ],
    category: "Fan Projects",
  },
  {
    title: "Adhikain Studios",
    description: `I oversee the creation and management of publication materials, ensuring each piece reflects our vision, creativity, and brand identity. I also take part in planning and producing various creative outputs, including documentary films, print materials, and merchandise.`,
    image: "SOCMED/ADHIKAIN/3.jpg",
    images: ["SOCMED/ADHIKAIN/3.jpg", "SOCMED/ADHIKAIN/4.jpg", "SOCMED/ADHIKAIN/5.jpg"],
    category: "Social Media Campaign",
  },
  {
    title: "Various Layout & Design Projects",
    description: `This collection features various advertising projects I created during my academic years, focusing on layout and design for both digital platforms (e.g., social media ads) and printed materials (e.g., trifold brochures and magazine layouts).`,
    image: "LAYOUT_DESIGN/1.jpg",
    images: [
      "LAYOUT_DESIGN/1.jpg",
      "LAYOUT_DESIGN/2.jpg",
      "LAYOUT_DESIGN/3.jpg",
      "LAYOUT_DESIGN/4.jpg",
      "LAYOUT_DESIGN/5.jpg",
      "LAYOUT_DESIGN/6.jpg",
    ],
    category: "Layout & Design",
  },
  {
    title: "Báon Productions",
    description: `Led the Creatives Committee for the seminar “FilmKo, May Pelikulang?”, a roundtable on political discourse and storytelling in the creative industry. Served as part of the Creatives Committee for the thesis film “Himpala,” handling social media promotion and visual content creation to build anticipation for the film.`,
    image: "SOCMED/BAON/1.jpg",
    images: [
      "SOCMED/BAON/1.jpg",
      "SOCMED/BAON/2.jpg",
      "SOCMED/BAON/3.jpg",
      "SOCMED/BAON/4.png",
      "SOCMED/BAON/5.png",
    ],
    category: "Social Media Campaign",
  },
  {
    title: "Posters",
    description: `This section showcases some of my personal works inspired by my favorite K-pop groups. I created movie-like posters based on their songs, music videos, and released concept photos.`,
    image: "POSTERS/1.jpg",
    images: [
      "POSTERS/1.jpg",
      "POSTERS/2.jpg",
      "POSTERS/3.jpg",
      "POSTERS/4.jpg",
    ],
    category: "Photo Manipulation",
  },
  {
    title: "Báon Productions",
    description: `A showcase of motion graphics work including logo animations, social media content, and promotional videos. Each piece demonstrates different animation techniques and storytelling approaches through motion.`,
    image: "ANIMATION/BAONgif.gif",
    category: "Motion Graphics",
  },
  {
    title: "Cinesilangan Omnibous Trailer",
    description: `A dynamic compilation trailer created as part of our school film festival project. This piece brings together highlights from various student films, showcasing diverse themes, storytelling styles, and creative visions. Designed to capture excitement and anticipation, the trailer serves as a visual prelude to the festival—celebrating the collective artistry and passion of emerging filmmakers.`,
    video: "VIDEO/1.mp4",
    category: ["Motion Graphics", "Video Editing"],
  },
  {
    title: "Fourth of July",
    description: `A showcase of motion graphics work including logo animations, social media content, and promotional videos. Each piece demonstrates different animation techniques and storytelling approaches through motion.`,
    image: "ANIMATION/FOURTH.gif",
    category: "Motion Graphics",
  },
  {
    title: "House of Worship Christian Church",
    description: `A showcase of motion graphics work including logo animations, social media content, and promotional videos. Each piece demonstrates different animation techniques and storytelling approaches through motion.`,
    image: "ANIMATION/HOWCC.gif",
    category: "Motion Graphics",
  },
  {
    title: "Overheat",
    description: `A showcase of motion graphics work including logo animations, social media content, and promotional videos. Each piece demonstrates different animation techniques and storytelling approaches through motion.`,
    video: "VIDEO/2.mp4",
    category: "Video Editing",
  },
  {
    title: "First Sunday 2025",
    description: `A showcase of motion graphics work including logo animations, social media content, and promotional videos. Each piece demonstrates different animation techniques and storytelling approaches through motion.`,
    video: "VIDEO/3.mp4",
    category: "Video Editing",
  },
  {
    title: "Thorn Princess",
    description: `A portrait photography piece I created during my studies, exploring the concept of using everyday objects as creative elements—in this case, a scarf. The model is styled as a casual version of Yor Forger from the anime *Spy x Family*.`,
    image: "PHOTOGRAPHY/1.jpg",
    category: "Portrait",
  },
  {
    title: "Allegory of Patience",
    description: `This is my rendition of Carlo Dolci’s painting Allegory of Patience. I added a humorous twist by incorporating hair rollers on the model, suggesting that she’s in a hurry and hasn’t finished getting ready.`,
    image: "PHOTOGRAPHY/2.jpg",
    category: "Portrait",
  },
  {
    title: "Magnetic",
    description: `A street model photography project taken near at school, featuring a grungy aesthetic rich in background textures that complement the model’s pose and attitude`,
    image: "PHOTOGRAPHY/3.jpg",
    category: "Portrait",
  },
  {
    title: "Araw-Araw",
    description: `A commissioned prenup shoot taken at Intramuros and Binondo Bridge. The client requested a natural look with a cinematic, film-like aesthetic.`,
    image: "PHOTOGRAPHY/4.png",
    category: "Portrait",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("graphic design");

  const tabs = [
    { id: "graphic design", label: "Graphic Design" },
    { id: "photography", label: "Photography" },
    { id: "videos", label: "Videos" },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Social Media Campaign": "bg-teal-100 text-teal-700",
      "Photo Manipulation": "bg-red-100 text-red-400",
      "Fan Projects": "bg-sky-100 text-sky-700",
      "Layout & Design": "bg-yellow-100 text-yellow-700",
      Product: "bg-teal-100 text-teal-700",
      Portrait: "bg-red-100 text-red-700",
      "Landscape / Street": "bg-sky-100 text-sky-700",
      "Motion Graphics": "bg-yellow-100 text-yellow-700",
      "Video Editing": "bg-teal-100 text-teal-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const getProjectsByTab = (tabId) => {
    switch (tabId) {
      case "graphic design":
        return projects.filter((project) => {
          const categories = Array.isArray(project.category)
            ? project.category
            : [project.category];
          return categories.some((cat) =>
            [
              "Social Media Campaign",
              "Photo Manipulation",
              "Fan Projects",
              "Layout & Design",
            ].includes(cat)
          );
        });
      case "photography":
        return projects.filter((project) => {
          const categories = Array.isArray(project.category)
            ? project.category
            : [project.category];
          return categories.some((cat) =>
            ["Product", "Portrait", "Landscape / Street"].includes(cat)
          );
        });
      case "videos":
        return projects.filter((project) => {
          const categories = Array.isArray(project.category)
            ? project.category
            : [project.category];
          return categories.some((cat) =>
            ["Motion Graphics", "Video Editing"].includes(cat)
          );
        });
      default:
        return projects;
    }
  };

  const openImageModal = (src, alt, isVideo = false) =>
    setSelectedImage({ src, alt, isVideo });
  const closeImageModal = () => setSelectedImage(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-2 px-4 sm:px-6 lg:px-14 mt-8 w-full max-w-4xl ">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-center my-4 gap-4 sm:gap-6 lg:gap-10">
            <h1 className="text-6xl font-semibold leading-none text-left text-neutral-900">
              Projects<span className="text-teal-500">.</span>
            </h1>
            <p className="text-xs leading-relaxed max-w-2xl text-neutral-900">
              A curated collection of my works in branding, digital, and print
              design—blending aesthetics with purposeful storytelling inspired
              by music, culture, and human connection.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-300 mb-4 text-xs md:text-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-2 px-2 focus:outline-none transition-colors duration-200 relative ${
                  activeTab === tab.id
                    ? "border-b-2 border-teal-500 text-teal-500 font-semibold -mb-px"
                    : "text-gray-600 hover:text-teal-500"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Carousel */}
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-1">
              {getProjectsByTab(activeTab).map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <div
                      className="backdrop-blur-sm rounded-lg p-4 transition-all duration-300 cursor-pointer border border-gray-500/35 h-full flex flex-col"
                      onClick={() => openModal(project)}
                    >
                      {project.video ? (
                        <video
                          src={project.video}
                          className="w-full h-32 object-cover rounded-lg mb-3 sm:mb-4 flex-shrink-0"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-32 object-cover rounded-lg mb-3 sm:mb-4 flex-shrink-0"
                        />
                      )}
                      <div className="flex-grow flex flex-col">
                        <div className="flex items-center mb-2 flex-wrap gap-1">
                          {Array.isArray(project.category) ? (
                            project.category.map((cat, idx) => (
                              <span
                                key={idx}
                                className={`px-2 py-0.5 rounded-full text-[8px] font-medium ${getCategoryColor(
                                  cat
                                )}`}
                              >
                                {cat}
                              </span>
                            ))
                          ) : (
                            <span
                              className={`px-2 py-0.5 rounded-full text-[8px] font-medium ${getCategoryColor(
                                project.category
                              )}`}
                            >
                              {project.category}
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-bold mb-2 line-clamp-2 text-neutral-900">
                          {project.title}
                        </h3>
                        <p className=" mb-2 text-xs flex-grow line-clamp-3 text-neutral-700 truncate">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex xl:flex" />
            <CarouselNext className="hidden lg:flex xl:flex" />
          </Carousel>

          {/* Photography Portfolio Link */}
          {activeTab === "photography" && (
            <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-teal-200 flex items-center justify-center">
              <a
                href="https://labajoangelinal.wixsite.com/photography"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-teal-600 hover:text-teal-800 transition-colors"
              >
                <Icon icon="tabler:external-link" className="text-sm" />
                View my complete photography portfolio
              </a>
            </div>
          )}

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"
              onClick={closeImageModal}
            >
              <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-1 text-white hover:text-gray-300 text-3xl z-[70] w-10 h-10 flex items-end justify-center"
                >
                  ×
                </button>
                {selectedImage.isVideo ? (
                  <video
                    src={selectedImage.src}
                    controls
                    className="max-w-full max-h-full object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                    autoPlay
                  />
                ) : (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-96 h-96 object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>
            </div>
          )}

          {selectedProject && (
            <div
              className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50"
              onClick={closeModal}
            >
              <div
                className="rounded-lg w-full bg-white text-zinc-950 max-w-xs sm:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full p-1"
                >
                  <Icon icon="tabler:x" className="text-xl" />
                </button>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {Array.isArray(selectedProject.category) ? (
                    selectedProject.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          cat
                        )}`}
                      >
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        selectedProject.category
                      )}`}
                    >
                      {selectedProject.category}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold mb-4">
                  {selectedProject.title}
                </h2>

                <div className="relative mb-4">
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      controls
                      className="w-full h-auto max-h-[60vh] object-contain rounded-lg cursor-pointer"
                      preload="metadata"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal(
                          selectedProject.video,
                          selectedProject.title,
                          true
                        );
                      }}
                    />
                  ) : (
                    <img
                      src={
                        selectedProject.images
                          ? selectedProject.images[currentImageIndex]
                          : selectedProject.image
                      }
                      alt={`${selectedProject.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-auto max-h-[60vh] object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal(
                          selectedProject.images
                            ? selectedProject.images[currentImageIndex]
                            : selectedProject.image,
                          `${selectedProject.title} - Image ${
                            currentImageIndex + 1
                          }`
                        );
                      }}
                    />
                  )}

                  {selectedProject.images &&
                    selectedProject.images.length > 1 &&
                    !selectedProject.video && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                        >
                          <Icon
                            icon="tabler:chevron-left"
                            className="text-lg"
                          />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                        >
                          <Icon
                            icon="tabler:chevron-right"
                            className="text-lg"
                          />
                        </button>

                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                currentImageIndex === index
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                          {currentImageIndex + 1} /{" "}
                          {selectedProject.images.length}
                        </div>
                      </>
                    )}
                </div>

                <p className="mb-4 leading-relaxed text-xs text-gray-700">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 -left-24 w-56 h-56 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-80 lg:h-80 bg-teal-500/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 -right-12 w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-64 lg:h-64 bg-red-400/50 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-56 -left-8 w-64 h-64 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 bg-sky-900/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 -right-2 w-44 h-44 sm:w-44 sm:h-44 md:w-72 md:h-72 lg:w-72 lg:h-72 bg-yellow-400/50 rounded-full blur-2xl animate-pulse delay-3000"></div>

        <div className="absolute top-1/2 left-1/4 md:w-32 md:h-32 lg:w-32 lg:h-32 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 md:w-24 md:h-24 lg:w-24 lg:h-24 bg-red-400/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/2 md:w-40 md:h-40 lg:w-40 lg:h-40 bg-sky-900/20 rounded-full blur-2xl animate-pulse delay-2500"></div>
        <div className="absolute top-2/3 right-1/4 md:w-28 md:h-28 lg:w-28 lg:h-28 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-3500"></div>
      </div>

      <main className="flex-grow relative z-10">{children}</main>
    </div>
  );
};

export default Layout;

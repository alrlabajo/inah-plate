import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center w-full px-2 sm:px-6">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-2">
        <div className="w-full flex flex-col items-center justify-center text-center gap-4">
          <Icon icon="iconoir:file-not-found" className="text-6xl" />
          <h1 className="text-4xl font-bold">Not Found</h1>
          <p className="mt-2 text-lg">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

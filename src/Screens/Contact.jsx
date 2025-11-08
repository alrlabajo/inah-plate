import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center w-full px-2 sm:px-6">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-2">
        <div className="w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-center sm:text-left text-neutral-900">
            Get in touch<span className="text-teal-500">.</span>
          </h1>
        </div>
        <div className="w-full mt-6 flex flex-col items-center gap-3 text-base sm:flex-row sm:justify-end sm:gap-0 sm:text-xl text-right">
          <a
            href="mailto:labajo.angelinal@gmail.com"
            className="text-sky-900 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
          <span className="mx-2 hidden sm:inline text-neutral-900">|</span>
          <a
            href="https://www.linkedin.com/in/inahlabajo/"
            className="text-red-400 dark:text-violet-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <span className="mx-2 hidden sm:inline text-neutral-900">|</span>
          <a
            href="https://www.facebook.com/chilwolsail"
            className="text-yellow-500 dark:text-violet-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </a>
          <span className="mx-2 hidden sm:inline text-neutral-900">|</span>
          <a
            href="https://x.com/chilwolsail"
            className="text-sky-900 dark:text-violet-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          <span className="mx-2 hidden sm:inline text-neutral-900">|</span>
          <a
            href="https://www.behance.net/angelinlabajo"
            className="text-red-400 dark:text-violet-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            behance
          </a>
          <span className="mx-2 hidden sm:inline text-neutral-900">|</span>
          <a
            href="https://www.tiktok.com/@chilwolsail"
            className="text-yellow-500 dark:text-violet-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            tiktok
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

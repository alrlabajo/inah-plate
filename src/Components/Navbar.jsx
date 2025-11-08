import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { NAV_MENU_DATA as Menu } from "../utils/data";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
      if (isMenuOpen) setIsMenuOpen(false);
      setOpenDropdown(null);
      navigate(path);
    }
  };

  const toggleDropdown = (itemId) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  const isActiveItem = (item) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    if (item.children) {
      return item.children.some(child => location.pathname === child.path);
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <div className="flex justify-between md:justify-center items-center p-5 lg:px-10 relative z-20 w-full max-w-4xl mx-auto">
        <div className="md:hidden font-bold flex flex-row space-x-2 items-center">
          <span className="text-violet-500 text-3xl">
            <img src="logo.png" alt="Logo" className="h-8 w-8" />
          </span>
        </div>
        
        {/* Hamburger menu */}
        <div className="md:hidden z-30">
          <button
            className="block focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <Icon
                icon="material-symbols:close-rounded"
                className="text-4xl text-teal-500"
              />
            ) : (
              <Icon
                icon="ci:hamburger-md"
                className="text-4xl text-teal-500"
              />
            )}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden md:block"
          } fixed inset-0 bg-white z-20 flex flex-col items-center justify-center md:relative md:bg-transparent md:backdrop-blur-none md:flex md:justify-center md:flex-row`}
        >
          <ul className="flex flex-col items-center md:flex-row md:space-y-0 gap-x-7">
            {Menu.map((item) => (
              <li key={item.id} className="mb-6 md:mb-0 relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`text-neutral-900 hover:text-teal-500 transition ease-linear text-base px-2 py-1 rounded-full inline-flex items-center gap-1 ${
                        isActiveItem(item)
                          ? "font-bold underline"
                          : "hover:text-teal-500"
                      }`}
                      onClick={() => toggleDropdown(item.id)}
                    >
                      {item.label}
                      <Icon 
                        icon="tabler:chevron-down" 
                        className={`text-sm transition-transform ${
                          openDropdown === item.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Dropdown menu */}
                    {openDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-48 z-30">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-teal-50 hover:text-teal-500 first:rounded-t-lg last:rounded-b-lg ${
                              location.pathname === child.path
                                ? "font-bold text-teal-500 bg-teal-50"
                                : "text-neutral-900"
                            }`}
                            onClick={() => handleClick(child.path)}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular menu item
                  <button
                    className={`text-neutral-900 hover:text-teal-500 block transition ease-linear text-base px-2 py-1 rounded-full ${
                      location.pathname === item.path
                        ? "font-bold underline"
                        : "hover:text-teal-500"
                    }`}
                    onClick={() => handleClick(item.path)}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
            <a
              href="INAH_CV.pdf"
              className="bg-teal-400 hover:bg-teal-400/95 text-white font-medium text-xs py-2 px-4 rounded-full inline-flex items-center justify-center"
            >
              <span>Hire me</span>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
// Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../context/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  const isMenuActive = (path) => {
    return location.pathname === path ? "text-blue-500 " : "text-white";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`bg-black opacity-80 p-4 fixed w-full transition-all duration-300 z-10 ${
      isScrolled ? "shadow-lg" : ""
    }`}
    >
      <div
        className="container mx-auto flex justify-between items-center"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Link to="/" className={`text-2xl font-bold ${isMenuActive("/")}`}>
          <img src="/logo.png" alt="Logo" className="h-8" />
        </Link>

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <ul className={`lg:flex space-x-4 ${isOpen ? "flex" : "hidden"}`}>
          <li>
            <Link to="/" className={`hover:text-blue-300 ${isMenuActive("/")}`}>
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/prestasi"
              className={`hover:text-blue-300 ${isMenuActive("/prestasi")}`}
            >
              Prestasi
            </Link>
          </li>
          <li>
            <Link
              to="/kegiatan"
              className={`hover:text-blue-300 ${isMenuActive("/kegiatan")}`}
            >
              Kegiatan
            </Link>
          </li>

          <li className="hidden lg:block">
            <a href="tel:+123456789" className="text-white hover:text-blue-300">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +6283850548293
            </a>
          </li>

          <li className="hidden lg:block">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            </a>
          </li>

          <li className="hidden lg:block">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            </a>
          </li>

          {/* Dark Mode Toggle */}
          <li className="ml-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleDarkModeToggle}
                checked={isDarkMode}
              />
              <div className="relative w-12 h-6 transition-all duration-300 rounded-full bg-gray-300">
                <div
                  className={`absolute left-1 transition-all duration-300 w-5 h-5 rounded-full bg-white transform ${
                    isDarkMode ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>
                <div
                  className={`absolute left-0 transition-transform duration-300 w-6 h-6 rounded-full bg-blue-500 ${
                    isDarkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <span className="text-white dark:text-white ml-2 font-semibold">
                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
              </span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

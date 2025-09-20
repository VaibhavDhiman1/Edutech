import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Use location to determine the active link from the URL
  const { pathname } = useLocation();

  const links = [
    { name: "Material", path: "/material" },
    { name: "School", path: "/school" },
    { name: "Shop", path: "/shop" },
    { name: "About Ele", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 sm:px-8 lg:px-16 py-4 bg-white">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <img
          src="/Horizontal_1.svg" // Corrected path (assumes logo is in the /public folder)
          alt="CasaDeEle Logo"
          className="h-8 w-auto"
        />
      </Link>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            // Active state is now based on the current URL path
            className={`transition-colors ${
              pathname === link.path
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-gray-600 text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden z-40">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl transition-colors ${
                pathname === link.path
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
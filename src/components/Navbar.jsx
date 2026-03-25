import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
      style={{ transform: "translateZ(0)" }}
        className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 will-change-transform"
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
  <img
    src={logo}
    alt="AuctionHub Logo"
    className="h-10 w-auto object-contain scale-125 md:scale-150 origin-left"
  />
</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-[15px] text-gray-800 font-medium">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="relative group transition">
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[1.5px] bg-black transition-all duration-300 
                  ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-6 py-2.5 rounded-xl text-sm font-medium">
              Request Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY (FULL PAGE BLUR) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen
          ? "bg-black/30 backdrop-blur-md opacity-100 visible"
          : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* HALF SCREEN RIGHT PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] max-w-sm bg-black z-50 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} className="text-white" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-start pt-8 px-8 gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-white text-xl font-medium transition ${location.pathname === item.path ? "opacity-100" : "opacity-70"
                } hover:opacity-100`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 mt-10">
          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
            Request Access
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
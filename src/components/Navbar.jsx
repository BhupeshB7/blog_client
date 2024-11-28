import React, { useEffect, useState } from "react";
import { LogInIcon, SunIcon, MoonIcon } from "lucide-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { useThemeContext } from "../context/ThemeStyle";
import { useTheme } from "../context/theme-provider";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const logoUrl = "/logo.png";
  const { bgColor, textColor } = useThemeContext();
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    });
  }, []);
  return (
    <div
      className={`pt-3 w-full h-16 md:h-20 flex items-center justify-between ${bgColor} relative`}
    >
      {/* Logo */}
      <Link to="/" className="flex justify-between items-center p-4">
        {logoUrl ? (
          <Image src={logoUrl} alt="Logo" w={32} h={32} />
        ) : (
          <span className={textColor}>Logo not available</span>
        )}
      </Link>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden px-4 flex items-center justify-around">
        <button
          className="text-xl font-bold text-foreground py-3 px-3 m-2 rounded-full hover:bg-muted transform transition-transform duration-500 ease-in-out hover:scale-105 active:rotate-180"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon
              className="h-6 w-6 transition-all duration-500 ease-in-out"
              color="#FDB813"
            />
          ) : (
            <MoonIcon
              className="h-6 w-6 transition-all duration-500 ease-in-out"
              color="#222"
            />
          )}
        </button>
        <button
          className={`rounded-full ${textColor} h-16 w-16`}
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`w-full z-30 h-[90vh] flex flex-col items-center justify-center gap-8 text-lg absolute top-16   ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        } ${bgColor} ${textColor}`}
      >
        <Link to="/" className={textColor}>
          Home
        </Link>
        <Link to="/posts?sort=trending" className={textColor}>
          Trending
        </Link>
        <Link to="/posts?sort=popular" className={textColor}>
          Most Popular
        </Link>
        <Link to="/" className={textColor}>
          About
        </Link>
        <Link to="/login">
          <button className="inline-flex items-center justify-center px-4 py-2 text-white text-lg font-mono bg-gradient-to-tr from-[#5adaff] to-[#5468ff] shadow-lg rounded-full hover:shadow-[rgba(45,35,66,.4)_0_4px_8px,rgba(45,35,66,.3)_0_7px_13px_-3px,rgba(60,79,224)_0_-3px_0_inset] focus:ring-2 focus:ring-[#3c4fe0] focus:ring-inset active:transform active:translate-y-1 active:shadow-[rgba(60,79,224)_0_3px_7px_inset] cursor-pointer">
            Login <LogInIcon className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex items-center justify-center gap-8 p-4 font-medium">
        <Link to="/" className={textColor}>
          Home
        </Link>
        <Link to="/posts?sort=trending" className={textColor}>
          Trending
        </Link>
        <Link to="/posts?sort=popular" className={textColor}>
          Most Popular
        </Link>
        <Link to="/" className={textColor}>
          About
        </Link>

        <SignedOut>
          <Link to="/login" className={textColor}>
            <button className="inline-flex items-center justify-center px-4 py-2 text-white text-lg font-mono bg-gradient-to-tr from-[#5adaff] to-[#5468ff] shadow-lg rounded-full hover:shadow-[rgba(45,35,66,.4)_0_4px_8px,rgba(45,35,66,.3)_0_7px_13px_-3px,rgba(60,79,224)_0_-3px_0_inset] focus:ring-2 focus:ring-[#3c4fe0] focus:ring-inset active:transform active:translate-y-1 active:shadow-[rgba(60,79,224)_0_3px_7px_inset] cursor-pointer">
              Login <LogInIcon className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <button
          className="text-xl font-bold text-foreground py-3 px-3 m-2 rounded-full hover:bg-muted transform transition-transform duration-500 ease-in-out hover:scale-105 active:rotate-180"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon
              className="h-6 w-6 transition-all duration-500 ease-in-out"
              color="#FDB813"
            />
          ) : (
            <MoonIcon
              className="h-6 w-6 transition-all duration-500 ease-in-out"
              color="#222"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

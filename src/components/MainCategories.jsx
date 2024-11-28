import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeStyle";
import React from "react";

const MainCategories = () => {
  const {
    categoryBgColor,
    categoryLinkBgColor,
    titleColor,
    categoryLinkTextColor,
  } = useThemeContext();
  return (
    <div
      className={`${categoryBgColor} ${titleColor}  hidden md:flex rounded-3xl xl:rounded-full p-4 shadow-2xl items-center justify-center gap-8`}
    >
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className={`${categoryLinkTextColor} ${categoryLinkBgColor} rounded-full px-4 py-2 text-xl  `}
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web"
          className={`${titleColor}  hover:${categoryLinkBgColor}/80 rounded-full px-4 py-2 text-xl  `}
          >
          Web
        </Link>
        <Link
          to="/posts?cat=development"
          className={`${titleColor}  hover:${categoryLinkBgColor}/80 rounded-full px-4 py-2 text-xl  `}
          >
         Development
        </Link>
        <Link
          to="/posts?cat=database"
          className={`${titleColor}  hover:${categoryLinkBgColor}/80 rounded-full px-4 py-2 text-xl  `}
          >
          Database
        </Link>
        <Link
          to="/posts?cat=backend"
          className={`${titleColor}  hover:bg-opacity-50 hover:${categoryBgColor}  rounded-full px-4 py-2 text-xl  `}
        >
          Backend
        </Link>
      </div>
      {/* Search Bar */}
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Search for a category"
          className="w-full rounded-full p-2 text-lg"
        />
      </div>
    </div>
  );
};

export default MainCategories;

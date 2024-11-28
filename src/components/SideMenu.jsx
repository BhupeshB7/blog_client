import { Search } from "lucide-react";
import { useThemeContext } from "../context/ThemeStyle";
import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const { textColor, subtitleColor, titleColor, codeBgColor } =
    useThemeContext();
 
  return (
    <div className="h-max sticky top-8 flex flex-col gap-4 p-4">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className={`relative ${textColor} ${codeBgColor}  shadow-2xl  w-full rounded-md  px-4 py-2 border-gray-500 outline-none`}
        />
        <Search
          className={`${titleColor} w-5 h-5 bg-inherit absolute right-8 top-9 transform -translate-y-1/2  `}
        />
      </div>
      {/* filter */}
      <div className="flex flex-col gap-2">
        <div className={`${subtitleColor} text-md flex items-center gap-2`}>
          <input
            type="checkbox"
            id="filter"
            className="w-4 h-4 rounded-md border border-gray-300"
          />
          <label htmlFor="filter" className="text-sm">
            Trending
          </label>
        </div>
        {/* item 2 */}
        <div className={`${subtitleColor} text-md flex items-center gap-2`}>
          <input
            type="checkbox"
            id="filter"
            className="w-4 h-4 rounded-md border border-gray-300"
          />
          <label htmlFor="filter" className="text-sm">
            Recent Posts
          </label>
        </div>
        {/* item 3 */}
        <div className={`${subtitleColor} text-md flex items-center gap-2`}>
          <input
            type="checkbox"
            id="filter"
            className="w-4 h-4 rounded-md border border-gray-300"
          />
          <label htmlFor="filter" className="text-sm">
            Popular Posts
          </label>
        </div>
      </div>
      {/* Categories */}
      <h1 className={`${titleColor} text-sm font-medium`}>Categories</h1>
      <div className={`${subtitleColor} text-md flex flex-col gap-2`}>
        <Link to="/" className="underline">
          All
        </Link>
        <Link to="/" className="underline">
          Node.js
        </Link>
        <Link to="/" className="underline">
          Web Development
        </Link>
        <Link to="/" className="underline">
          JavaScript
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;

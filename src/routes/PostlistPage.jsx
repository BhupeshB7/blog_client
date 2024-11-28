import SideMenu from "../components/SideMenu";
// import PostListItem from "../components/PostListItem";
import React from "react";
import { useThemeContext } from "../context/ThemeStyle";

const PostlistPage = () => {
  const { textColor } = useThemeContext();
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <h1 className={`${textColor} mb-8 text-2xl`}>Development Blog</h1>
      <button
        className={`${textColor} md:hidden bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-2 rounded-md shadow-xl`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or search"}
      </button>
      <div className="flex gap-8 flex-col-reverse lg:flex-row">
        <div className="w-full lg:2/3">
          {/* <PostListItem /> */}
        </div>
        <div className={` lg:block w-full lg:w-1/3 ${open ? "" : "hidden"}`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostlistPage;

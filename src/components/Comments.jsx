import { useThemeContext } from "../context/ThemeStyle";
import React from "react";
import Comment from "./Comment";

const Comments = () => {
  const { textColor, subtitleColor,codeBgColor } = useThemeContext();
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 ">
      <h1
        className={`${subtitleColor} text-xl md:text-3xl xl:text-4xl font-semibold`}
      >
        Comments
      </h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          name="comment"
          id="comment" 
          rows="4"
          placeholder="Write your comment here..."
          className={`${textColor} ${codeBgColor}  shadow-2xl  w-full rounded-md p-4 border-gray-500 outline-none`}
       />
        <button className=" bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-md shadow-2xl">
         Send
        </button>
      </div>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  );
};

export default Comments;

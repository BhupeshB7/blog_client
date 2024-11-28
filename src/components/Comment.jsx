import { useThemeContext } from "../context/ThemeStyle";
import React from "react";
import Image from "./Image";

const Comment = () => {
  const { textColor, subtitleColor, codeBgColor, dateColor } =
    useThemeContext();
  return (
    <div
      className={`${textColor} ${codeBgColor} p-4 rounded-xl mb-8 shadow-2xl `}
    >
      <div className="flex items-center gap-8">
        <Image
          src={"userImg.jpeg"}
          w="45"
          className="rounded-full object-cover w-12 h-12"
        />
        <span className={`${subtitleColor} text-md lg:text-xl`}>John Doe</span>
        <span className={`${dateColor} text-md`}>2024-11-25</span>
      </div>
      <div className="mt-3">
        <p className="text-sm md:text-md  ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem
          quos nulla debitis enim pariatur vitae repudiandae necessitatibus.
          Voluptates, sit.
        </p>
      </div>
    </div>
  );
};

export default Comment;

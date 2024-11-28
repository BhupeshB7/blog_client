// import React from "react";
// import Image from "./Image";
// import { Link } from "react-router-dom";

// const FeaturedPosts = () => {
//   return (
//     <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8">
//       {/* first post */}
//       <div className="w-full lg:w-1/2 flex flex-col gap-4">
//         <Image
//           src="/featured1.jpeg"
//           alt="featured post"
//           className="rounded-2xl object-cover"
//         />
//         <div className="flex-1 flex flex-col gap-2">
//           <div className="flex gap-2 items-center">
//             <h1 className="font-semibold text-md lg:text-xl">01. </h1>
//             <Link
//               to={`/posts/web-development-with-node-js-and-express-js`}
//               className="text-lg lg:text-xl"
//             >
//               Backend Node js and Express js
//             </Link>
//             <span className="text-green-400 rounded-full">2 days ago</span>
//           </div>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
//             voluptatibus, doloremque, voluptas, quia, aspernatur.
//           </p>
//         </div>
//       </div>
      
//       {/* others */}
//       <div className="w-full lg:w-1/2 flex flex-col gap-8">
//         {/* second post */}
//         <div className="lg:h-1/3 flex justify-between gap-4">
//           <Image
//             src="/featured1.jpeg"
//             alt="featured post"
//             className="rounded-2xl object-cover w-1/3 aspect-video"
//           />
//           <div className="flex-1 flex flex-col gap-2 w-2/3">
//             <div className="flex gap-2 items-center">
//               <h1 className="font-semibold text-md lg:text-xl">02. </h1>
//               <Link
//                 to={`/posts/web-development-with-node-js-and-express-js`}
//                 className="text-lg lg:text-xl"
//               >
//                 Node js
//               </Link>
//               <span className="text-green-400 rounded-full">2 days ago</span>
//             </div>
//             <p className="text-gray-400 pt-3">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
//               voluptatibus, doloremque, voluptas, quia, aspernatur.
//             </p>
//           </div>
//         </div>

//         {/* third post */}
//         <div className="lg:h-1/3 flex justify-between gap-4">
//           <Image
//             src="/featured1.jpeg"
//             alt="featured post"
//             className="rounded-2xl object-cover w-1/3"
//           />
//           <div className="flex-1 flex flex-col gap-2 w-2/3">
//             <div className="flex gap-2 items-center">
//               <h1 className="font-semibold text-md lg:text-xl">03. </h1>
//               <Link
//                 to={`/posts/web-development-with-node-js-and-express-js`}
//                 className="text-lg lg:text-xl"
//               >
//                 Node js
//               </Link>
//               <span className="text-green-400 rounded-full">2 days ago</span>
//             </div>
//             <p className="text-gray-400 pt-3">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
//               voluptatibus, doloremque, voluptas, quia, aspernatur.
//             </p>
//           </div>
//         </div>

//         {/* fourth post */}
//         <div className="lg:h-1/3 flex justify-between gap-4">
//           <Image
//             src="/featured1.jpeg"
//             alt="featured post"
//             className="rounded-2xl object-cover w-1/3"
//           />
//           <div className="flex-1 flex flex-col gap-2 w-2/3">
//             <div className="flex gap-2 items-center">
//               <h1 className="font-semibold text-md lg:text-xl">04. </h1>
//               <Link
//                 to={`/posts/web-development-with-node-js-and-express-js`}
//                 className="text-lg lg:text-xl"
//               >
//                 Node js
//               </Link>
//               <span className="text-green-400 rounded-full">2 days ago</span>
//             </div>
//             <p className="text-gray-400 pt-3">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
//               voluptatibus, doloremque, voluptas, quia, aspernatur.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedPosts;




































import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeStyle";
 
const Post = ({ number, title, imageSrc, link, time, dateColor }) => (
  <div className="lg:h-1/3 flex justify-between gap-4">
    <Image
      src={imageSrc}
      alt={title}
      className="rounded-2xl object-cover w-1/3 aspect-video"
      aria-label={title}
    />
    <div className="flex-1 flex flex-col gap-2 w-2/3">
      <div className=""> 
        <Link to={link} className="text-lg lg:text-xl">
          {title}
        </Link>
        <p className={`${dateColor} text-md`}>{time}</p>
      </div>
      <p className="text-gray-500 pt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        voluptatibus, doloremque, voluptas, quia, aspernatur.
      </p>
    </div>
  </div>
);

const FeaturedPosts = () => {
    const {dateColor} = useThemeContext();
  const posts = [
   
    {
      number: "02",
      title: "Node js",
      imageSrc: "/featured2.jpeg",
      link: "/posts/web-development-with-node-js-and-express-js",
      time: "2 days ago"
    },
    {
      number: "03",
      title: "Node js",
      imageSrc: "/featured3.jpeg",
      link: "/posts/web-development-with-node-js-and-express-js",
      time: "2 days ago"
    },
    {
      number: "04",
      title: "Node js",
      imageSrc: "/featured4.jpeg",
      link: "/posts/web-development-with-node-js-and-express-js",
      time: "2 days ago"
    }
  ];

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8">
      {/* first post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          src="/featured1.jpeg"
          alt="featured post"
          className="rounded-2xl object-cover"
        />
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold text-md lg:text-xl">01. </h1>
            <Link
              to={`/posts/web-development-with-node-js-and-express-js`}
              className="text-lg lg:text-xl"
            >
              Backend Node js and Express js
            </Link>
            <p className={`${dateColor}`}>2 days ago</p>
          </div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptatibus, doloremque, voluptas, quia, aspernatur.
          </p>
        </div>
      </div>

      {/* others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {posts.map(post => (
          <Post
            key={post.number}
            number={post.number}
            title={post.title}
            imageSrc={post.imageSrc}
            link={post.link}
            time={post.time}
            dateColor={dateColor}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;

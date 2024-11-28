// import { Link } from "react-router-dom";
// import Image from "./Image";
// import { format } from "timeago.js";
// import { useThemeContext } from "../context/ThemeStyle";

// const PostListItem = ({ post }) => {
//   const { textColor, subtitleColor, dateColor, titleColor } = useThemeContext();
//     const imageUrl = `${post.img}`;
//   return (
//     <div className={`${textColor} container mx-auto px-4 py-8`}>
//       {/* Adjust grid layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         <div
//           key={post.slug}
//           className="rounded-lg overflow-hidden flex flex-col"
//         >
//           {post.img && (
//             <Image
//               src={imageUrl}
//               className="w-full h-48 object-cover  rounded-xl blog_image"
//               alt={post.title}
//             />
//           )}  
//           <div className={`${textColor} p-4 flex flex-col gap-3`}>
//             <Link
//               to={`/${post.slug}`}
//               className="text-xl font-semibold hover:underline"
//             >
//               {post.title}
//             </Link>
//             <div className="text-gray-500 text-sm">
//               <span>By</span> &nbsp;
//               <Link
//                 to={`/posts?author=${post?.user?.username}`}
//                 className={`${titleColor} hover:underline text-md md:text-xl`}
//               >
//                 {post.user?.username}
//               </Link>{" "}
//               &nbsp;
//               <b>on</b> &nbsp;
//               <Link to="#" className="hover:underline">
//                 {post.category}
//               </Link>
//               <p className={`${dateColor} ml-auto`}>{format(post.createdAt)}</p>
//             </div>
//             <p className={`${subtitleColor} text-sm`}>{post.desc}</p>
//             <Link
//               to={`/${post.slug}`}
//               className="text-blue-500 text-sm hover:underline"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostListItem;










import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";
import { useThemeContext } from "../context/ThemeStyle";

const PostListItem = ({ posts }) => {
  const { textColor, subtitleColor, dateColor, titleColor } = useThemeContext();

  return (
    <div className={`${textColor} container mx-auto px-4 py-8`}>
      {/* Adjust grid layout for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-lg overflow-hidden flex flex-col"
          >
            {post.img && (
              <Image
                src={post.img}
                className="w-full h-48 object-cover rounded-xl blog_image"
                alt={post.title}
              />
            )}
            <div className={`${textColor} p-4 flex flex-col gap-3`}>
              <Link
                to={`/${post.slug}`}
                className="text-xl font-semibold hover:underline"
              >
                {post.title}
              </Link>
              <div className="text-gray-500 text-sm">
                <span>By</span> &nbsp;
                <Link
                  to={`/posts?author=${post?.user?.username}`}
                  className={`${titleColor} hover:underline text-md md:text-xl`}
                >
                  {post.user?.username}
                </Link>{" "}
                &nbsp;
                <b>on</b> &nbsp;
                <Link to="#" className="hover:underline">
                  {post.category}
                </Link>
                <p className={`${dateColor} ml-auto`}>
                  {format(post.createdAt)}
                </p>
              </div>
              <p className={`${subtitleColor} text-sm`}>{post.desc}</p>
              <Link
                to={`/${post.slug}`}
                className="text-blue-500 text-sm hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostListItem;

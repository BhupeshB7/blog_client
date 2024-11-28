// import { useThemeContext } from "../context/ThemeStyle";
// import { useAuth, useUser } from "@clerk/clerk-react";
// import React, { useState } from "react";
// import "react-quill-new/dist/quill.snow.css";
// import ReactQuill from "react-quill-new";
// import "quill/dist/quill.snow.css";
// import { SkeletonWrite } from "../components/skeleton/SkeletonWrite";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { UploadFile } from "../components/UploadFile";

// const modules = {
//   toolbar: [
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["code-block"],
//     ["link", "image"],
//   ],
// };

// const formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "list",
//   "bullet",
//   "code-block",
//   "link",
//   "image",
// ];

// const Write = () => {
//   const { isLoaded, isSignedIn } = useUser();
//   const { getToken } = useAuth();
//   const navigate = useNavigate();
//   const mutation = useMutation({
//     mutationFn: async (newPost) => {
//       const token = await getToken();
//       return axios.post(
//         `${import.meta.env.VITE_API_ENDPOINT}/api/post/create`,
//         newPost,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     },
//     onSuccess: (res) => {
//       toast.success("Post has been created");
//       navigate(`/${res.data.slug}`);
//     },
//   });

//   const { bgColor, textColor, titleColor, subtitleColor, codeBgColor } =
//     useThemeContext();

//   const [postTitle, setPostTitle] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("Node.js");
//   const [content, setContent] = useState("");
//   const [coverImageUrl, setCoverImageUrl] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleContentChange = (value) => {
//     setContent(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a FormData object to include the image and post data
//     const formData = new FormData();
//     formData.append("title", postTitle);
//     formData.append("category", selectedCategory);
//     formData.append("content", content);

//     const data = {
//       title: postTitle,
//       category: selectedCategory,
//       content,
//       img: coverImageUrl.filePath || "",
//     };
//     console.log(data);
//     mutation.mutate(data);
//   };
//   if (!isLoaded) return <SkeletonWrite />;
//   if (isLoaded && !isSignedIn)
//     return <div className="text-center text-red-500">You should sign in.</div>;

//   return (
//     <div
//       className={`${bgColor} ${textColor} min-h-screen flex items-center justify-center lg:px-4 py-8`}
//     >
//       <div
//         className={`${codeBgColor} shadow-xl rounded-xl w-full sm:w-full lg:w-full p-8 space-y-8`}
//       >
//         <h1 className={`${titleColor} text-4xl font-extrabold text-center`}>
//           Create a New Post
//         </h1>
//         <form className={`${codeBgColor} space-y-6`} onSubmit={handleSubmit}>
//           {/* Cover Image Section */}

//           <UploadFile
//             type="image"
//             setData={setCoverImageUrl}
//             setProgress={setProgress}
//           >
//             <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer relative">
//               Click to upload an image
//             </div>
//           </UploadFile> 
//           {progress > 1 && progress < 100 && (
//             <h5 className="text-md font-medium">
//               Image Uploaded... {progress}%
//             </h5>
//           )}
//           {/* Post Title Input */}
//           <div className="flex flex-col">
//             <label
//               htmlFor="title"
//               className={`text-lg font-medium ${subtitleColor} mb-2`}
//             >
//               Post Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={postTitle}
//               onChange={(e) => setPostTitle(e.target.value)}
//               className={`${codeBgColor} ${subtitleColor} w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
//               placeholder="Enter a catchy title..."
//             />
//           </div>

//           {/* Category Dropdown */}
//           <div className="flex flex-row gap-6">
//             <label
//               htmlFor="category"
//               className={`text-lg font-medium ${subtitleColor} mb-2`}
//             >
//               Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className={`${codeBgColor} ${subtitleColor} w-full lg:w-1/4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
//             >
//               <option value="all">General (All)</option>
//               <option value="node">Node.js</option>
//               <option value="react">React Js</option>
//               <option value="Web">Web Development</option>
//               <option value="JavaScript">JavaScript</option>
//               <option value="database">Database</option>
//             </select>
//           </div>

//           {/* Rich Text Editor */}
//           <div className="flex flex-col gap-8">
//             <label className={`text-lg font-medium ${subtitleColor} mb-2`}>
//               Content
//             </label>
//             <ReactQuill
//               theme="snow"
//               value={content}
//               onChange={handleContentChange}
//               modules={modules}
//               formats={formats}
//               className="w-full rounded-lg h-[400px] mb-4"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-12">
//             <button
//               type="submit"
//               disabled={mutation.isPending}
//               className="w-full  bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//             >
//               {mutation.isPending ? "Creating..." : " Publish Post"}
//             </button>
//           </div>
//           {mutation.isError && (
//             <div className="text-red-500 text-center">
//               {mutation.error.message}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Write;


















































import { useThemeContext } from "../context/ThemeStyle";
import { useAuth, useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";
import { SkeletonWrite } from "../components/skeleton/SkeletonWrite";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UploadFile } from "../components/UploadFile";
import DOMPurify from "dompurify";  

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["code-block"],
    ["link", "image"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "code-block",
  "link",
  "image",
];

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/post/create`,
        newPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  const { bgColor, textColor, titleColor, subtitleColor, codeBgColor } =
    useThemeContext();

  const [postTitle, setPostTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Node.js");
  const [content, setContent] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize the content to avoid any malicious tags or scripts
    let sanitizedContent = DOMPurify.sanitize(content);

    // Replace specific tags with custom classes for better frontend control
    sanitizedContent = sanitizedContent.replace(/<h1>/g, '<h1 class="custom-h1">')
                                       .replace(/<h2>/g, '<h2 class="custom-h2">')
                                       .replace(/<code>/g, '<code class="custom-code">');

    const data = {
      title: postTitle,
      category: selectedCategory,
      content: sanitizedContent,
      img: coverImageUrl.filePath || "",
    };

    mutation.mutate(data);
  };

  if (!isLoaded) return <SkeletonWrite />;
  if (isLoaded && !isSignedIn)
    return <div className="text-center text-red-500">You should sign in.</div>;

  return (
    <div
      className={`${bgColor} ${textColor} min-h-screen flex items-center justify-center lg:px-4 py-8`}
    >
      <div
        className={`${codeBgColor} shadow-xl rounded-xl w-full sm:w-full lg:w-full p-8 space-y-8`}
      >
        <h1 className={`${titleColor} text-4xl font-extrabold text-center`}>
          Create a New Post
        </h1>
        <form className={`${codeBgColor} space-y-6`} onSubmit={handleSubmit}>
          {/* Cover Image Section */}
          <UploadFile
            type="image"
            setData={setCoverImageUrl}
            setProgress={setProgress}
          >
            <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer relative">
              Click to upload an image
            </div>
          </UploadFile>
          {progress > 1 && progress < 100 && (
            <h5 className="text-md font-medium">
              Image Uploaded... {progress}%
            </h5>
          )}
          {/* Post Title Input */}
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className={`text-lg font-medium ${subtitleColor} mb-2`}
            >
              Post Title
            </label>
            <input
              type="text"
              id="title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className={`${codeBgColor} ${subtitleColor} w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
              placeholder="Enter a catchy title..."
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-row gap-6">
            <label
              htmlFor="category"
              className={`text-lg font-medium ${subtitleColor} mb-2`}
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`${codeBgColor} ${subtitleColor} w-full lg:w-1/4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
            >
              <option value="all">General (All)</option>
              <option value="node">Node.js</option>
              <option value="react">React Js</option>
              <option value="Web">Web Development</option>
              <option value="JavaScript">JavaScript</option>
              <option value="database">Database</option>
            </select>
          </div>

          {/* Rich Text Editor */}
          <div className="flex flex-col gap-8">
            <label className={`text-lg font-medium ${subtitleColor} mb-2`}>
              Content
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleContentChange}
              modules={modules}
              formats={formats}
              className="w-full rounded-lg h-[400px] mb-4"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-12">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Creating..." : "Publish Post"}
            </button>
          </div>
          {mutation.isError && (
            <div className="text-red-500 text-center">
              {mutation.error.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Write;

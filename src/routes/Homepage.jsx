import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeStyle";
import SkeletonPostListItem from "../components/skeleton/SkeletonPostListItem";
import SkeletonFeaturedPost from "../components/skeleton/SkeletonFeaturedPost";
import PostList from "../components/PostList";
// Lazy loading components
const FeaturedPosts = lazy(() => import("../components/FeaturedPosts"));
const MainCategories = lazy(() => import("../components/MainCategories"));
// const PostListItem = lazy(() => import("../components/PostListItem"));

const Homepage = () => {
  const { bgColor, textColor, titleColor, subtitleColor } = useThemeContext();

  return (
    <>
    <div className={`${bgColor} ${textColor} py-6 px-4`}>
      {/* Breadcrumb */}
      <div className="flex gap-2 mb-4 text-sm">
        <Link to="/" className={`${textColor} hover:underline`}>
          Home
        </Link>
        <span>•</span>
        <span className={`${titleColor}`}>Blogs and Articles</span>
      </div>

      {/* Introduction Section */}
      <div className="flex mb-4 flex-col lg:flex-row gap-6 items-center justify-between">
        {/* Titles */}
        <div className="max-w-4xl">
          <h1
            className={`${titleColor} text-3xl md:text-5xl lg:text-6xl font-extrabold`}
          >
            Share Your Voice with the World.
          </h1>
          <p className={`${subtitleColor} mt-4 text-lg md:text-xl lg:text-2xl`}>
            A platform to explore, inspire, and connect through engaging stories
            and articles.
          </p>
        </div>

        {/* Share Your Story Button */}
        <div>
          <button
            className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl 
            hover:from-yellow-500 hover:to-pink-500 transition-all duration-500 ease-in-out"
          >
            <span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full animate-pulse blur-sm"
              aria-hidden="true"
            ></span>
            <span className="relative">Share Your Story</span>
          </button>
        </div>
      </div>

      {/* Main Categories */}
      <Suspense fallback={<div>Loading categories...</div>}>
        <MainCategories />
      </Suspense>

      {/* Featured Posts Placeholder */}
      <div className="mt-10">
        <h2
          className={`${titleColor} text-2xl md:text-3xl font-bold text-center`}
        >
          Featured Posts
        </h2>
        <Suspense fallback={<SkeletonFeaturedPost/>}>
          <FeaturedPosts />
        </Suspense>
      </div>

      <h3 className={`${titleColor} text-2xl md:text-3xl font-bold mt-8`}>
        Recent Posts
      </h3>
    </div>
      <Suspense fallback={<SkeletonPostListItem />}>
        <PostList />
      </Suspense>
    </>
  );
};

export default Homepage;

import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom"; 
import SkeletonPageList from "./skeleton/SkeletonPageList";
import { useThemeContext } from "../context/ThemeStyle";
const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);

  console.log(searchParamsObj);

  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/api/post/all`,
    {
      params: { page: pageParam, limit: 10, ...searchParamsObj },
    }
  );
  return res.data;
};

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { textColor } = useThemeContext();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  // if (status === "loading") return "Loading...";
  if (isFetching) return <SkeletonPageList/>;

  // if (status === "error") return "Something went wrong!";
  if (error) return "Something went wrong!";

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];
  console.log(allPosts);

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b className={`${textColor} text-center text-md italic py-4`}>All posts loaded!</b>
        </p>
      }
    >
      {/* {allPosts.map((post) => (
        <div className="rounded-lg overflow-hidden flex flex-col">
          <PostListItem key={post._id} post={post} />
        </div>
      ))} */}
      <PostListItem posts={allPosts} />
    </InfiniteScroll>
  );
};

export default PostList;

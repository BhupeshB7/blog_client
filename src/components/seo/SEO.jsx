// import React from "react";
// import { Helmet } from "react-helmet";
// import { useQuery } from "@tanstack/react-query";
// // import axios from "axios";

// // // Fetch Metadata
// // const fetchMetaData = async (slug) => {
// //   const response = await axios.get(
// //     `${import.meta.env.VITE_API_ENDPOINT}/api/post/${slug}/metadata`
// //   );
// //   return response.data;
// // };

// const SEO = ({ data }) => {
// //   const { data, isLoading, isError } = useQuery({
// //     queryKey: ["seo", slug],
// //     queryFn: () => fetchMetaData(slug),
// //   });

// //   if (isLoading) return null;  
// //   if (isError) return null; // Handle errors gracefully

// //   const { title, description, keywords, content, image } = data.post;
// //    console.log("SEO Data:", data);
//   return (
//     <>
//     <div>{data?.title}</div>
//     <Helmet>
//       <title>{data?.title}</title>
//       <meta name="description" content={data?.desc} />
//       <meta property="og:title" content={data?.title} />
//       <meta property="og:description" content={data?.desc} />
//       <meta property="og:image" content={data?.image} />
//       <meta name="twitter:title" content={data?.title} />
//       <meta name="twitter:description" content={data?.description} />
//       <meta name="twitter:image" content={data?.image} />
//       {/* Adding content as raw HTML */}
//       <meta name="article:content" content={data?.content} />
//     </Helmet>
//     </>
//   );
// };

// export default SEO;






import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch Metadata
const fetchMetaData = async (slug) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/api/post/${slug}/metadata`
  );
  return response.data;
};

const SEO = ({ slug }) => {
    const { data, isLoading, isError } = useQuery({
      queryKey: ["seo", slug],
      queryFn: () => fetchMetaData(slug),
    });
  
    if (isLoading) {
      return (
        <Helmet>
          <title>Loading...</title>
        </Helmet>
      );
    }
  
    if (isError || !data) {
      return (
        <Helmet>
          <title>Error: Unable to fetch data</title>
        </Helmet>
      );
    }
  
    const { title, description } = data;
  
    return (
      <>
      <p>title is: {title}</p>

      <Helmet>
      <title>{title || "Fallback Title"}</title>
        <meta name="description" content={description} />
      </Helmet>
      </>
    );
  };
  

export default SEO
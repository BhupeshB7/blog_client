import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import { format } from "timeago.js";
import { useThemeContext } from "../context/ThemeStyle";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import parse from "html-react-parser";
import SkeletonSinglePage from "../components/skeleton/SkeletonSInglePage";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SEO from "../components/seo/Seo";
import { Helmet } from "react-helmet-async";
// Fetch Post Data
const fetchPost = async (slug) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/api/post/${slug}`
  );
  return response.data;
};

// Code Block Component
const CodeBlock = ({ code, codeBgColor, bgColor, textColor }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const customStyle = {
    backgroundColor: codeBgColor,
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.6)",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  };

  return (
    <div className={`${codeBgColor} relative p-4 rounded-lg`}>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="absolute right-2 top-2 border border-gray-500 px-3 py-1  ">
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language="c"
        style={solarizedlight}
        className="rounded-lg"
        customStyle={customStyle}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const {
    isPending,
    isError,
    data: postData,
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  const data = postData?.post;
  const { textColor, subtitleColor, dateColor, codeBgColor, bgColor } =
    useThemeContext();

  const [processedCode, setProcessedCode] = useState("");

  useEffect(() => {
    if (data?.content) {
      const extractedCode = [];
      parse(data.content, {
        replace: (domNode) => {
          if (
            domNode.name === "div" &&
            domNode.attribs?.class === "ql-code-block"
          ) {
            let codeText = domNode.children
              ? domNode.children.map((child) => child.data || "").join("\n")
              : "";

            codeText = codeText.replace(/<br\s*\/?>/g, "");

            const filteredCode = codeText
              .split("\n")
              .filter((line) => line.trim() !== "")
              .map((line) => line.trim())
              .join("\n");

            extractedCode.push(filteredCode);

            return null;
          }
        },
      });

      setProcessedCode(extractedCode.join("\n\n"));
    }
  }, [data]); 
  if (isPending) return <SkeletonSinglePage />;
  if (isError) return `Error: ${data?.message}`;
  if (!data) return "Data not found!...";

  return (
    <>
      <Helmet>
      <title>{data?.title || "Static Title"}Single page title</title>
        <meta name="description" content={data.desc} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.desc} />
        <meta property="og:image" content={data.image} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.desc} />
        <meta name="twitter:image" content={data.image} />
        {/* Adding content as raw HTML */}
        <meta name="article:content" content={data.content} />
      </Helmet>
    <div className={`${textColor} container mx-auto px-4 py-8`}>
    
      {/* <SEO data={data} slug={slug} /> */}
      {/* Post Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1
            className={`${subtitleColor} text-xl md:text-3xl xl:text-4xl font-semibold`}
          >
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data?.user?.username}</Link>
            <span>on</span>
            <Link className={`${dateColor}`}>{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
        </div>
        {data?.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data?.img} w="600" className="rounded-2xl" />
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          {parse(data.content, {
            replace: (domNode) => {
              if (
                domNode.name === "div" &&
                domNode.attribs?.class === "ql-code-block"
              ) {
                return <div className="hidden"></div>;
              }
            },
          })}

          {processedCode && (
            <CodeBlock
              code={processedCode}
              codeBgColor={codeBgColor}
              bgColor={bgColor}
              textColor={textColor}
            />
          )}
        </div>
      </div>

      {/* Comments Section */}
      <Comments />
    </div>
    </>
  );
};

export default SinglePostPage;

"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "../../../components/navbar";

const BlogPost = () => {
  // Get the query parameters
  const searchParams = useSearchParams();
  const body = searchParams.get("body");
  // Get the 'body' parameter (which is the email)

  return (
    <div>
      <Navbar />
      <div className="flex  md:h-[500px] items-center justify-center">
        <div className=" rounded-lg shadow-xl flex-col gap-5 flex w-[90%] md:w-[40%] p-16 md:h-[300px]">
          <h1 className="font-sans text-[#4d4d4d] text-[36px] font-semibold">
            Blog Post
          </h1>
          {body ? (
            <p className="text-[#717171] font-semibold">
              Body: <p className="font-normal">{decodeURIComponent(body)}</p>
            </p> // Decode and display the email
          ) : (
            <p>No blog found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

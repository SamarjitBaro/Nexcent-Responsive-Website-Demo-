"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
// Define the type for a single post (or comment in this case)
interface Post {
  id: number;
  name: string;
  body: string;
}

const Blog = () => {
  // Set the type of the posts state as an array of Post objects
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts data from the JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div>
      <Navbar />
      <h3 className="font-sans mb-10 mt-10 tracking-wide  rounded-lg  py-10  text-center text-[#4d4d4d] text-[36px] leading-[40px] font-semibold">
        Blog List
      </h3>

      <div className="flex items-center  flex-col">
        {posts.map((post) => (
          <li
            key={post.id}
            className=" flex text-[#717171] border-2 px-4 leading-10 w-[80%] md:w-[40%]  "
          >
            <Link
              className="text-[#717171]  "
              href={`/blog/${post.id}?body=${encodeURIComponent(post.body)}`}
            >
              <b className=" border-r-2 px-2 mr-3">{post.id}</b>

              <b>{post.name}</b>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Blog;

"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "@prisma/client";

async function getThreeBlogs() {
  const res = await fetch("/api/blogPost/getThreeBlogs"); // Replace with your API endpoint if it's different
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export default async function BlogCardList() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getThreeBlogs()
      .then((blogs) => setBlogs(blogs))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
      {blogs.map((blog, index) => (
        <div key={index} className="w-full h-full">
          <BlogCard blogPost={blog} />
        </div>
      ))}
    </div>
  );
}

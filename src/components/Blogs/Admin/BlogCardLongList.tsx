"use client";

import React, { useEffect, useState } from "react";
import BlogCardLong from "@/components/Blogs/Admin/BlogCardLong";
import { useSession } from "next-auth/react";
import { BlogPost } from "@/lib/types/Interfaces";

type BlogCardLongProps = Pick<
  BlogPost,
  "id" | "title" | "image" | "content" | "published"
>;

async function getBlogsByUser(userId: number, accessToken: string) {
  const res = await fetch("/api/user/" + userId, {
    headers: {
      authorization: ` ${accessToken}`,
    },
  }); // Replace with your API endpoint if it's different
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export default function BlogCardList() {
  const [blogs, setBlogs] = useState<BlogCardLongProps[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      getBlogsByUser(session?.user.id, session?.user.accessToken)
        .then((blogs) => setBlogs(blogs))
        .catch((err) => console.error(err));
    }
  }, [status]);

  return (
    <div className="flex flex-col gap-5">
      {blogs.map((blog, index) => (
        <div key={index} className="w-full h-full">
          <BlogCardLong
            id={blog.id}
            title={blog.title}
            image={blog.image}
            content={blog.content}
            published={blog.published}
          />
        </div>
      ))}
    </div>
  );
}

"use client";
import BlogItemCard from "@/components/admin/blogItemCard/BlogItemCard";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: number;
  };
}

const BlogPostItemPage = async ({ params }: Props) => {
  const [blogItems, setBlogItems] = useState<BlogPostItem[]>([]);
  const { data: session } = useSession();

  console.log(blogItems);

  async function getBlogItemsByBlogId(blogPostId: number) {
    const res = await fetch("/api/blogPost/blogPostItem/" + blogPostId);
    console.log(blogPostId);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return await res.json();
  }

  useEffect(() => {
    getBlogItemsByBlogId(params.id)
      .then((blogItems) => setBlogItems(blogItems))
      .catch((err) => console.error(err));

    return () => {
      setBlogItems([]);
    };
  }, [params.id]);

  if (blogItems === null)
    return (
      <div className="flex items-center justify-center flex-col">
        <img src="/sad404.ffc1ba45.svg" alt="" />
        <div className="text-4xl font-color-100 pb-32">404 PAGE NOT FOUND</div>
      </div>
    );

  if (session?.user.role === "ADMIN") {
    return (
      <div className="flex justify-center items-center flex-col gap-3 w-full">
        {/*Make list comp and item card comp*/}
        <h1>Blog Items</h1>
        {blogItems.map((blogItem) => (
          <BlogItemCard key={blogItem.id} blogPostItem={blogItem} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1>Only admins can access this page</h1>
    </div>
  );
};

export default BlogPostItemPage;

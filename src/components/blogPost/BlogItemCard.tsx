import React from "react";

interface BlogPostItemProps {
  blogPostItem: BlogPostItem;
}

export default function BlogItemCard({ blogPostItem }: BlogPostItemProps) {
  return (
    <div>
      <h1 className="mt-6 text-4xl font-bold">{blogPostItem.title}</h1>
      <div className="border p-10 mt-2">
        <div className="flex justify-around flex-wrap">
          <div className="relative">
            <img className="h-28" src="/testimage.jpeg" alt="" />
            <div className="absolute left-0 bottom-[-2]">image name</div>
          </div>
          <div className="m-10">
            <h1 className="text-2xl font-bold">{blogPostItem.subTitle}</h1>
            <p className="text-sm max-w-xs">{blogPostItem.subContent}</p>
          </div>
        </div>
      </div>
      <p className="mt-2">{blogPostItem.content}</p>
    </div>
  );
}

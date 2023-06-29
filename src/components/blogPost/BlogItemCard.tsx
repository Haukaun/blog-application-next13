import React from "react";

interface BlogPostItemProps {
  blogPostItem: BlogPostItem;
}

export default function BlogItemCard({ blogPostItem }: BlogPostItemProps) {
  return (
    <div>
      <h1 className="my-6 text-4xl font-bold">{blogPostItem.title}</h1>
      <div className="card card-side bg-base-100 shadow-xl border">
        <figure>
          <img src="/testimage.jpeg" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blogPostItem.subTitle}</h2>
          <p>{blogPostItem.subContent}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <p className="my-10">{blogPostItem.content}</p>
    </div>
  );
}

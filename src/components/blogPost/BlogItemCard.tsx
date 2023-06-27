import React from "react";

interface BlogPostItemProps {
  blogPostItem: BlogPostItem;
}

export default function BlogItemCard({ blogPostItem }: BlogPostItemProps) {
  return (
    <div>
      <h1>{blogPostItem.title}</h1>
    </div>
  );
}

import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  // Array of blog data
  {
    title: "Top 10 shoes of 2021",
    image: "/testimage.jpeg",
    description: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    title: "Top 10 shoes of 2021",
    image: "/testimage.jpeg",
    description: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    title: "Shoes!",
    image: "/testimage.jpeg",
    description: "If a dog chews shoes whose shoes does he choose?",
  },
];

export default function BlogCardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
      {blogs.map((blog, index) => {
        return (
          <div key={index} className="w-full h-full">
            <BlogCard
              title={blog.title}
              image={blog.image}
              description={blog.description}
            />
          </div>
        );
      })}
    </div>
  );
}

import React from "react";

interface BlogCardProps {
  title: string;
  image: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, description }) => {
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h1 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;

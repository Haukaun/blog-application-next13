interface Blog {
  title: string;
  image: string;
  content: string;
  pathToBlog: string;
}

const BlogCard: React.FC<Blog> = ({ title, image, content, pathToBlog }) => {
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
        <p>{content}</p>

        <a href={pathToBlog} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

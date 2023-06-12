interface BlogPostProps {
  title: string;
  image: string;
  content: string;
  pathToEditBlog: string;
  published: boolean;
}

const BlogCard: React.FC<BlogPostProps> = ({
  title,
  image,
  content,
  pathToEditBlog,
  published,
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="relative">
        <img
          className="w-64 h-32 object-cover object-center"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body items-center flex-row">
        <div className="flex-1">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
        </div>

        <div className="card-actions justify-end">
          <h1>{published}</h1>
          <a className="btn btn-primary">Edit</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

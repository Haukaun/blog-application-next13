import { BlogPost } from "@/lib/types/Interfaces";
import { useSession } from "next-auth/react";
import { useState } from "react";

type BlogCardLongProps = Pick<
  BlogPost,
  "id" | "title" | "subTitle" | "image" | "content" | "published"
>;

const BlogCardLong: React.FC<BlogCardLongProps> = ({
  id,
  title,
  image,
  subTitle,
  published,
}) => {
  const { data: session } = useSession();
  const [isDeleted, setIsDeleted] = useState(false);

  async function deleteBlogPost() {
    if (!window.confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    const res = await fetch("/api/blogPost/delete/" + id, {
      method: "DELETE",
      headers: {
        authorization: ` ${session?.user.accessToken}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    } else {
      setIsDeleted(true);
      return await res.json();
    }
  }

  if (isDeleted) return null;

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
          <p>{subTitle}</p>
        </div>

        <div className="card-actions justify-end">
          <button onClick={deleteBlogPost} className="btn btn-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a9 9 0 100 18 9 9 0 000-18zm0 14a5 5 0 100-10 5 5 0 000 10z"
              />
            </svg>
          </button>
          <a href={"/" + id} className="btn btn-primary">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCardLong;

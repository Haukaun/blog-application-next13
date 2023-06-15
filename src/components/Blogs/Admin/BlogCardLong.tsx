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
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
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

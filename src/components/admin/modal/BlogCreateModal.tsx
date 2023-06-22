import { useSession } from "next-auth/react";
import React, { useState } from "react";

export const BlogCreateModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [slug, setSlug] = useState("");

  const { data: session } = useSession();

  const handleSubmit = async () => {
    const response = await fetch("/api/blogPost/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: ` ${session?.user.accessToken}`,
      },
      body: JSON.stringify({
        blogPost: {
          title,
          subTitle,
          content,
          slug,
          userId: session?.user.id,
          image: "/testimage.jpeg",
        },
      }),
    });

    if (response.ok) {
      // handle success
    } else {
      // handle error
    }
  };

  return (
    <div>
      <label htmlFor="my_modal_5" className="btn">
        Create new blogpost
      </label>

      <input type="checkbox" id="my_modal_5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg pb-5">CREATE BLOGPOST</h3>
            <div className="gap-10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 w-full"
              >
                <label>
                  Slug:
                  <input
                    type="text"
                    name="slug"
                    required
                    className="p-2 mt-2 w-full bg-gray-100 text-base-100"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </label>
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    required
                    className="p-2 mt-2 w-full bg-gray-100 text-base-100"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label>
                  Sub-title:
                  <input
                    type="text"
                    name="subTitle"
                    required
                    className="p-2 mt-2 w-full bg-gray-100 text-base-100"
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                  />
                </label>
                <label>
                  Content:
                  <textarea
                    name="content"
                    required
                    className=" p-2 mt-2 w-full h-40 bg-gray-100 text-base-100"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>
                <input type="submit" value="Submit" className="btn" />
              </form>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_5" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useEffect, useState } from "react";

interface Props {
  blogPost: BlogPost;
}

export const BlogItemOverviewModal = ({ blogPost }: Props) => {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    getBlogItemsByPostId();
  }, [blogPost]);

  async function getBlogItemsByPostId() {
    const res = await fetch("/api/blogPost/blogPostItem/" + blogPost.id, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    console.log(data);
    setBlogItems(data);
  }

  return (
    <div>
      <label htmlFor="my_modal_3" className="btn">
        Blog Items:
        {blogPost.items.length}
      </label>

      <input type="checkbox" id="my_modal_3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg pb-5">Blog-item list:</h3>
            <div className="gap-10">
              <h1>{blogItems.length}</h1>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_3" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

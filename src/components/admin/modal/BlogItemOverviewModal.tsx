import React, { useEffect, useState } from "react";

interface Props {
  blogPost: BlogPost;
}

export const BlogItemOverviewModal = ({ blogPost }: Props) => {
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
              {blogPost.items.map((blog, index) => (
                <div key={index}>
                  <p>{blog.title}</p>
                </div>
              ))}
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

import React, { useState } from "react";

interface Props {
  blogItemsCount: number;
  blogPostId: number;
}

export const BlogItemOverviewModal = ({
  blogItemsCount,
  blogPostId,
}: Props) => {
  return (
    <div>
      <label htmlFor="my_modal_3" className="btn">
        Blog Items:
        {blogItemsCount}
      </label>

      <input type="checkbox" id="my_modal_3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg pb-5">Blog-item list:</h3>
            <div className="gap-10">
              <h1>ankara</h1>
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

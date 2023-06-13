import React from "react";

export const BlogModal = () => {
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      >
        Create new blogpost
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl h-full flex">
          <div className="flex-auto">Preview of Blog Here</div>
          <div className="flex flex-col w-64">
            <h3 className="font-bold text-lg">Create a Blog Post</h3>
            <div className="gap-10">
              <form
                action={"/senddatahere"}
                method="post"
                className="flex flex-col space-y-4 w-full"
              >
                <label>
                  Blog Title:
                  <input
                    type="text"
                    name="title"
                    className="border-2 rounded-md p-2 mt-2 w-full"
                  />
                </label>
                <label>
                  Blog Content:
                  <textarea
                    name="content"
                    className="border-2 rounded-md p-2 mt-2 w-full"
                  />
                </label>
                <input type="submit" value="Submit" className="btn" />
              </form>
              <div className="divider"></div>

              <h3 className="font-bold text-lg pt-4">BlogPost item</h3>
              <form
                action={"/senddatahere"}
                method="post"
                className="flex flex-col space-y-4 w-full"
              >
                <label>
                  Item Content:
                  <input
                    type="text"
                    name="item"
                    className="border-2 rounded-md p-2 mt-2 w-full"
                  />
                </label>
                <input type="submit" value="Submit" className="btn" />
              </form>
            </div>
          </div>
          <div className="modal-action absolute bottom-3 right-3">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

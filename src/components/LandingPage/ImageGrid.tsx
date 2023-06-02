import React from "react";

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3">
        <img
          className="object-cover h-full w-full"
          src="img3.jpg"
          alt="Image 3"
        />
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <img
          className="object-cover h-full w-full"
          src="img1.jpg"
          alt="Image 1"
        />
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
        <img
          className="object-cover h-full w-full"
          src="img2.jpg"
          alt="Image 2"
        />
      </div>
    </div>
  );
}

import React from "react";

export default function NavbarLinks() {
  return (
    <ul className="flex flex-row justify-between gap-10 p-10 flex-wrap">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Blogs</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
}

"use client";

import BlogCardLong from "@/components/Blogs/Admin/BlogCardLong";
import { useSession } from "next-auth/react";
import React from "react";

//This page should contain an ovwerview of all of the blogposts the user has created
// When pressing a blog card we should go to a page where we can make a blogpost with blogpostitems on it

export default function page() {
  const { data: session } = useSession();
  if (session?.user.role === "ADMIN") {
    return (
      <div>
        <BlogCardLong
          title="New movie is released!"
          image="/testimage.jpeg"
          content="Click the button to watch on Jetflix app."
          pathToEditBlog="/"
          published={false}
        />
        <BlogCardLong
          title="New movie is released!"
          image="/Blog-intro.jpg"
          content="Click the button to watch on Jetflix app."
          pathToEditBlog="/"
          published={false}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Only admins can access this page</h1>
      </div>
    );
  }
}

"use client";

import BlogCardLongList from "@/components/admin/blogCardAdmin/BlogCardLongList";
import { BlogCreateModal } from "@/components/admin/modal/BlogCreateModal";

import { useSession } from "next-auth/react";
import React from "react";

//This page should contain an ovwerview of all of the blogposts the user has created
// When pressing a blog card we should go to a page where we can make a blogpost with blogpostitems on it

export default function page() {
  const { data: session } = useSession();
  if (session?.user.role === "ADMIN") {
    return (
      <div className="flex justify-center items-center flex-col gap-3 w-full">
        <BlogCardLongList />
        <BlogCreateModal />
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

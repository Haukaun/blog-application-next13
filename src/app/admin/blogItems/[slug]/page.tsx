"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function page({}) {
  const { data: session } = useSession();
  if (session?.user.role === "ADMIN") {
    return (
      <div className="flex justify-center items-center flex-col gap-3 w-full">
        {/*Make list comp and item card comp*/}
        <h1>Blog Items</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Only admins can access this page</h1>
    </div>
  );
}
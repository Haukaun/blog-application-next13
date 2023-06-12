"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function page() {
  const { data: session } = useSession();

  if (session?.user.role === "ADMIN") {
    return (
      <div>
        <h1>Admin Page</h1>
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

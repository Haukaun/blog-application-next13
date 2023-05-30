"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Blog page</a>
      </div>
      <div className="flex-none">
        {!session && (
          <a
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        )}
        {session?.user && (
          <div className="flex items-center justify-center gap-2">
            <span className="flex flex-col items-center justify-center gap-0">
              <small>Signed in as</small>
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              className="btn btn-ghost btn-sm rounded-btn"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

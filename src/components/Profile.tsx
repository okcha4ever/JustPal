"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <button
          onClick={() => signOut()}
          className="bg-gray-400 px-4 py-2 text-black"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="rounded-sm bg-black px-4 py-2 text-sm text-white"
        >
          Sign-in
        </button>
      )}
    </div>
  );
};

export default Profile;

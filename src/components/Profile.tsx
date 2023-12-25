"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <button onClick={() => signOut()}>logout</button>
      ) : (
        <button onClick={() => signIn("google")}>Signin</button>
      )}
    </div>
  );
};

export default Profile;

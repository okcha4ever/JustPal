"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return;

  return (
    <div className="flex w-full justify-end">
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={session.user.image!}
              width={40}
              height={40}
              alt="user image"
              className="rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => signOut()}
              className="focus:bg-red-500 focus:text-white"
            >
              <button className="w-full text-start">Logout</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="rounded-sm bg-black px-10 py-2 text-sm font-semibold text-white"
        >
          Sign-in
        </button>
      )}
    </div>
  );
};

export default Profile;

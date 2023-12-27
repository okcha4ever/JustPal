"use client";
import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const { status } = useSession();
  const pathname = usePathname();
  return (
    <section className="flex w-full items-center justify-between border-b border-[#000000] px-20 py-3 pb-5 text-xl">
      <button
        onClick={() =>
          status === "authenticated" ? router.push("/home") : router.push("/")
        }
      >
        <Image width={220} height={220} alt="logo" src="/Logo.svg" />
      </button>

      <div className="flex w-full items-center justify-start">
        <div className="flex w-1/2 items-center space-x-10 ps-10">
          <div>
            <Link
              href="/stories"
              className={`text-[#A7A5A5] duration-200 ease-in-out  hover:text-black ${
                pathname.includes("/stories") && "font-bold text-black"
              }`}
            >
              Stories
            </Link>
          </div>
        </div>
      </div>
      <Profile />
    </section>
  );
};

export default Header;

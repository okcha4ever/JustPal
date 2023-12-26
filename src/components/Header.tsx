import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";

const Header = () => {
  return (
    <section className="flex items-center justify-between border-b border-[#000000] px-20 py-3 pb-5 text-xl">
      <Link href="/">
        <Image width={180} height={180} alt="logo" src="/Logo.svg" />
      </Link>

      <div className="flex w-full items-center justify-center">
        <div className="flex w-1/2 items-center justify-between">
          <div>
            <Link
              href="/news"
              className="text-[#A7A5A5] duration-200 ease-in-out  hover:text-black"
            >
              News
            </Link>
          </div>

          <div>
            <Link
              href="/stories"
              className="text-[#A7A5A5] duration-200 ease-in-out  hover:text-black"
            >
              Stories
            </Link>
          </div>

          <div>
            <Link
              href="/href"
              className="text-[#A7A5A5] duration-200 ease-in-out  hover:text-black"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <Profile />
      </div>
    </section>
  );
};

export default Header;

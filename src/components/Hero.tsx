"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-br from-[#000000] to-[#D5D5D573] bg-clip-text text-transparent">
      <div className="space-y-10 text-center text-4xl">
        <div>
          <p className="font-bold">Join Forces to Support the People</p>
          <p className="font-bold">of Palestine in their Time of Need</p>
          <p>with</p>
        </div>
        <div>
          <Image
            src="/pic.svg"
            alt="logo_pic"
            width={400}
            height={400}
            className="ml-6 w-auto"
          />
        </div>
        <div className="bg-[#081225] bg-clip-text text-2xl text-transparent">
          <p>Use AI to find the best coverage that brings</p>
          <p>you closer to the Palestinian people</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => signIn("google")}
            className="z-50 inline-flex h-10 w-72 items-center justify-between rounded-lg bg-[#fffff] px-5 text-xl text-black shadow-md shadow-slate-400"
            type="button"
          >
            <Image
              src="/Google Logo.svg"
              width={400}
              height={500}
              alt="google_logo"
              className="w-auto"
            />
            Sign Up with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

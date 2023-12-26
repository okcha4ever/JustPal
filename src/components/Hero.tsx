import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-[#050c18e5] to-[#D5D5D573] text-transparent bg-clip-text">
      <div className="text-4xl text-center space-y-10">
        <div>
          <p>Join Forces to Support the People</p>
          <p>of Palestine in their Time of Need</p>
          <p>with</p>
        </div>
        <div>
          <Image src="/Logo.svg" alt="logo_pic" width={400} height={400} className="ml-6 w-auto" />
        </div>
        <div className="text-2xl bg-[#081225] text-transparent bg-clip-text">
          <p>Use AI to find the best coverage that brings</p>
          <p>you closer to the Palestinian people</p>
        </div>
        <div className="space-x-4 flex justify-center items-center">
          <button className="bg-black text-white rounded-lg text-xl w-64 h-10">Activate Your Account</button>
          <button className="bg-[#fffff] text-black rounded-lg text-xl w-72 h-10 inline-flex items-center justify-between px-5 shadow-md shadow-slate-400">
            <Image src="/Google Logo.svg" width={400} height={500} alt="google_logo" className="w-auto" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

<<<<<<< HEAD
import Header from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Image
        src="https://processed-model-result.s3.us-east-2.amazonaws.com/40f6fe15-25f6-4616-b044-b50ecb01ed5c_0.png"
        alt="some"
        width={400}
        height={400}
      />
=======
import Bubbles from "@/components/Bubbles";
import Hero from "@/components/Hero";


export default function HomePage() {
  return (
    <main className="overflow-y-hidden py-10">
      <Bubbles />
      <Hero />
>>>>>>> 5189374d8df1d55a0793494b7af9ccbab7f76071
    </main>
  );
}

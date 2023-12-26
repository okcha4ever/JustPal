import News from "@/components/home/News";
import Stories from "@/components/home/stories";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section>
      <Stories />
      <News />
    </section>
  );
};

export default Home;

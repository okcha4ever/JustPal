import type NewsItem from "@/types/NewsItem";
import Image from "next/image";
import React from "react";

const NewsCard = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <section className="space-y-5 rounded-2xl pb-44 ">
      <div className="w-[18rem] rounded-lg bg-[#EEEEEE]">
        <Image
          width={100}
          height={100}
          src={newsItem.item.image_url}
          alt="rect"
          className="w-full rounded-lg object-fill"
        />

        <div className="min-h-[100px] p-2 text-sm font-bold text-black">
          {newsItem.item.text_content}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;

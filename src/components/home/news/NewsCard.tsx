import type NewsItem from "@/types/NewsItem";
import Image from "next/image";
import React from "react";

const NewsCard = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <section className="max-w-96 space-y-5 rounded-2xl">
      <div className="w-full rounded-lg bg-[#EEEEEE]">
        <Image
          width={200}
          height={200}
          src={newsItem.item.image_url}
          alt="rect"
          className="w-full max-w-full rounded-lg object-cover"
        />

        <div className="min-h-[100px] p-2 text-sm font-bold text-black">
          {newsItem.item.text_content}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;

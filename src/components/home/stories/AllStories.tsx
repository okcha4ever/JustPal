"use client";
import useGetStories from "@/hooks/stories/useGetStories";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import StoryCard from "./StoryCard";

const AllStories = () => {
  const { data, isLoading, status } = useGetStories("");
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center">
        Something went wrong. Please try again later...
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="flex flex-row items-center justify-center space-x-10 ">
        {data?.map((story, idx) => (
          <StoryCard story={story} key={story.id + idx} />
        ))}
      </div>
    </section>
  );
};

export default AllStories;

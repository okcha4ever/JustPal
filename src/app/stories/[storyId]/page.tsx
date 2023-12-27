"use client";
import StoryDetail from "@/components/home/stories/dynamic/StoryDetail";
import useGetStories from "@/hooks/stories/useGetStories";
import { type Story, type User } from "@prisma/client";

const page = ({ params }: { params: { storyId: string } }) => {
  const { data, isLoading, status } = useGetStories(params.storyId);

  if (!isLoading) {
    // Ensure data is available before rendering
    return data && data[0] ? (
      <main>
        <StoryDetail story={data[0] as Story & { user: User }} />
      </main>
    ) : (
      <div>No data available.</div>
    );
  }

  return <div className="pt-5 text-center">Loading...</div>;
};

export default page;

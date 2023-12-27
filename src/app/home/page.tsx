"use client";
import NewsCard from "@/components/home/news/NewsCard";
import StoryCard from "@/components/home/stories/StoryCard";
import useGetNews from "@/hooks/news/useGetNews";
import useGetStories from "@/hooks/stories/useGetStories";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: stories, isLoading: storiesIsLoading } = useGetStories();
  const { data: news, isLoading: newsIsLoading } = useGetNews();

  // const router = useRouter();
  // const { status } = useSession();

  // if (status === "loading") {
  //   return <p className="fon-semibold pt-10 text-center">Loading...</p>;
  // }

  // if (status === "unauthenticated") {
  //   router.push("/");
  //   return (
  //     <p className="fon-semibold pt-10 text-center text-red-500">
  //       Access Denied
  //     </p>
  //   );
  // }

  return (
    <section className="mt-5 space-y-20">
      <div className="w-full space-y-5 px-5">
        <h2 className="ps-5 text-xl font-semibold">Stories</h2>
        <div className="inline-flex w-full space-x-10 px-5">
          {stories && stories?.length > 0 ? (
            stories
              ?.slice(0.5)
              .map((story, idx) => <StoryCard story={story} key={idx} />)
          ) : (
            <div>No stories to display.</div>
          )}
        </div>
      </div>

      <div className="w-full space-y-2 px-5">
        <h2 className="ps-5 text-xl font-semibold">News</h2>
        <div className="inline-flex w-full space-x-10 px-5">
          {news && news?.length > 0 ? (
            news?.map((newsItem, idx) => (
              <NewsCard newsItem={newsItem} key={idx} />
            ))
          ) : (
            <div>No news items to display.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;

"use client";
import NewsCard from "@/components/home/news/NewsCard";
import StoryCard from "@/components/home/stories/StoryCard";
import useGetNews from "@/hooks/news/useGetNews";
import useGetStories from "@/hooks/stories/useGetStories";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const { data: stories, isLoading: storiesIsLoading } = useGetStories();
  // const { data: news, isLoading: newsIsLoading } = useGetNews();

  const news = [
    {
      item: {
        text_content:
          "Iran ‘Will Flatten Tel Aviv to the Ground’ if This Happens – Top Iran IRGC Advisor\t\t\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/12/Iran_Maskedi_Tasnim-326x245.png",
      },
    },
    {
      item: {
        text_content:
          "A War at All Fronts – Resistance Roundup – DAY 81\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/12/Qassam_Dec26_video-80x60.png",
      },
    },
    {
      item: {
        text_content:
          "We Heard ‘Harrowing Accounts’ in Gaza – WHO Chief\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/11/Gaza_Hospitals_social-80x60.png",
      },
    },
    {
      item: {
        text_content:
          "Explosion near Israeli Embassy in New Delhi – Reports\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/12/New-Delhi_Blast_video-80x60.png",
      },
    },
    {
      item: {
        text_content:
          "‘Dozens of Field Executions in Gaza’: Euro-Med Monitor Submits Primary Report to ICC, UN\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/12/GazaMassacres_Day72_EoP-80x60.png",
      },
    },
    {
      item: {
        text_content:
          "Israel’s Netanyahu Pushing ‘Voluntary Migration’ for Palestinians\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/05/Netanyahu-b-80x60.png",
      },
    },
    {
      item: {
        text_content:
          "Israel Faces “Tough Countdown” After Killing Top Military Official – Iran\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/12/Abdollahian_Iran_PressTV-80x60.png",
      },
    },
    {
      item: {
        text_content:
          "Israeli Forces Hold Palestinian Children in Gaza Playground, Force Them to Strip\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/12/Playground_Children_video-80x60.png",
      },
    },
    {
      item: {
        text_content:
          "‘No Thanks, Frau Genocide’ – Irish MP  to European Commission President\t\t\t\t\t\t\t\t\t\n\n\nDecember 26, 2023",
        image_url:
          "https://www.palestinechronicle.com/wp-content/uploads/2023/12/Daly_VonDerLeyen_PC-80x60.png",
      },
    },
  ];

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
      <div className="flex w-full flex-row flex-wrap space-y-5 px-10 sm:flex-col">
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

      <div className="flex w-full items-center justify-center pe-20">
        <div className="flex w-full flex-col items-center justify-center space-y-2">
          <h2 className="text-xl font-semibold">News</h2>
          <div className="relative w-full">
            {news && news?.length > 0 ? (
              <Carousel
                className="ps-20"
                plugins={[
                  Autoplay({
                    delay: 10000,
                  }),
                ]}
              >
                <CarouselContent className="flex items-center justify-center">
                  {news?.map((newsItem, idx) => (
                    <CarouselItem className="mx-auto w-full max-w-md" key={idx}>
                      <NewsCard newsItem={newsItem} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                {/* Adjust the left spacing */}
                <CarouselNext />
              </Carousel>
            ) : (
              <div>No news items to display.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import useCheckImage from "@/hooks/stories/useCheckImage";
import { type Story, type User } from "@prisma/client";
import Image from "next/image";

const StoryDetail = ({ story }: { story: Story & { user: User } }) => {
  const { data } = useCheckImage(story.image_status_url ?? "");

  console.log(data);
  console.log(data?.result.output[0]);
  return (
    <section className="flex items-center justify-center pt-10">
      <div className="h-[500px] w-[600px] rounded-3xl border bg-zinc-200">
        <div className="inline-flex w-full items-center justify-between rounded-t-3xl bg-gradient-to-b from-green-600 to-green-500 px-4 py-5">
          <div className="inline-flex items-center space-x-5">
            <Image
              src={story.user.image!}
              width={40}
              height={40}
              alt="user image"
              className="rounded-full"
            />
            <h2>{story.user.name}</h2>
          </div>
          {/* <Link href="#" className="text-white underline">
            more from {story.user.name}
          </Link> */}
        </div>
        <hr />
        <div className="max-h-[500px] space-y-5 overflow-y-auto  px-5 pt-5 text-start">
          <h2 className="text-lg font-bold">{story.title}</h2>
          <p>{story.description}</p>
          {story.image_status_url &&
          data &&
          data.status === "COMPLETED" &&
          data.result.output[0] ? (
            <Image
              src={data.result.output[0]}
              width={400}
              height={400}
              alt="generated image"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default StoryDetail;

import { type User, type Story } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StoryCard = ({ story }: { story: Story & { user: User } }) => {
  const trimmedDesc =
    story.description.length > 80
      ? story.description.slice(0, 78)
      : story.description;
  return (
    <div className="max-w-64 space-y-5 rounded-lg bg-gradient-to-b from-green-400 to-green-600 px-3 pb-5 pt-3 text-white">
      <div>
        <div className="inline-flex items-center gap-2">
          <Image
            src={story && story.user.image!}
            width={40}
            height={40}
            alt="user image in story"
            className="rounded-full"
          />
          <p>{story?.user.name}</p>
        </div>
        <h2 className="font-bold">{story.title}</h2>
      </div>
      {trimmedDesc.length === 78 ? (
        <p className="italic">
          {trimmedDesc}
          <Link href={`/stories/${story.id}`} className="text-gray-300">
            ...more
          </Link>
        </p>
      ) : (
        <p className="italic">{trimmedDesc}</p>
      )}
    </div>
  );
};

export default StoryCard;

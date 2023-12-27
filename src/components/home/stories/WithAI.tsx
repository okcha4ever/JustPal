"use client";
import { Input } from "@/components/ui/input";
import useAddStory from "@/hooks/stories/useAddStory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { type ZodType, z } from "zod";

type InputSchema = {
  keywordsString: string;
};
const WithAI = () => {
  const inputSchema: ZodType<InputSchema> = z.object({
    keywordsString: z.string().min(5).max(400),
  });
  const { data: session } = useSession();

  const { mutateAsync } = useAddStory();
  const { register, reset, handleSubmit } = useForm<
    z.infer<typeof inputSchema>
  >({
    resolver: zodResolver(inputSchema),
  });

  const onSubmit = async (data: InputSchema) => {
    // console.log();
    const keywords = data.keywordsString.split(" ");
    await mutateAsync({ keywords, userId: session?.user.id ?? "" });
    reset();
  };

  return (
    <section>
      <form
        className="flex w-full flex-col items-center justify-center space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("keywordsString")}
          placeholder="Your words..."
          className="w-96"
        />
        <button
          type="submit"
          className="flex items-center justify-center border px-3 py-3 text-black"
        >
          Submit!
        </button>
      </form>
    </section>
  );
};

export default WithAI;

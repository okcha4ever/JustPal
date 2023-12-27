import { env } from "@/env";
import { db } from "@/server/db";
import type TextCortexResponse from "@/types/TextCortex";
import { type Story } from "@prisma/client";
import axios from "axios";
import { NextResponse, type NextRequest } from "next/server";

const callAI = async (keywords: string[]) => {
  const promptOptions = {
    method: "POST",
    url: "https://api.textcortex.com/v1/texts/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.TEXTCORTEX_API_KEY}`,
    },
    data: {
      max_tokens: 512,
      model: "gpt-3.5-turbo-16k",
      n: 1,
      source_lang: "en",
      target_lang: "en",
      temperature: 0.65,
      text: `A traumatized citizen said these words about what happened in his area, please make this words into a coherent paragraph. and give me the best short title for it. The words are: ${keywords.join(
        "",
      )}. note: respond like you are a this traumatized person, not just a reporter or someone else. I want you to return the response as a JSON object in this type: {title:string ,description: string}`,
    },
  };

  const { data }: { data: TextCortexResponse } =
    await axios.request(promptOptions);

  return data;
};

const generateImage = async (caption: string, id: string) => {
  const { data }: { data: Story } = await axios.post(
    "http://localhost:3000/api/stories/ai-image/generate",
    {
      caption,
      id,
    },
  );
  return data;
};

export async function POST(request: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { keywords, userId }: { keywords: string[]; userId: string } =
    await request.json();

  try {
    const responseFromCallAI = await callAI(keywords);

    // ? boilerplate code just to reach 'text' key
    const text = responseFromCallAI.data.outputs[0]?.text;
    const textJson: unknown = text && JSON.parse(text);
    const typedTextJson = textJson as { title: string; description: string };

    // get image

    const addStory = await db.story.create({
      data: {
        keywords: keywords,
        title: typedTextJson.title,
        description: typedTextJson.description,
        user: { connect: { id: userId } },
      },
    });

    const getGeneratedImage = await generateImage(
      typedTextJson.title,
      addStory.id,
    );
    const updatedWithImage = await db.story.update({
      where: {
        id: addStory.id,
      },
      data: {
        image_status_url: getGeneratedImage.image_status_url,
      },
    });
    console.log(updatedWithImage);
    return NextResponse.json(updatedWithImage, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

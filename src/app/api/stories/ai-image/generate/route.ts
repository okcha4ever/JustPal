import { env } from "@/env";
import { db } from "@/server/db";
import type TextCortexResponse from "@/types/TextCortex";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

const headers = {
  accept: "application/json",
  authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ijg2ZGM3OTk4MzkwNWZiOTA4M2YxNzc2OWY5ODAzMDA3IiwiY3JlYXRlZF9hdCI6IjIwMjMtMTItMjVUMjM6MDI6NTcuODk3MDc4In0.IZ-nO7ylnvUmy3MSQ1_pcH9nmnRhFDXxJdeGKOZjKD8",
  "content-type": "application/json",
};

const textToImage = async (storyId: string, prompt: string) => {
  const url = "https://api.monsterapi.ai/v1/generate/sdxl-base";

  const requestData = {
    prompt: prompt,
    aspect_ratio: "portrait",
    guidance_scale: 12.5,
  };

  try {
    if (!prompt || !storyId) throw Error;
    // else
    const response = await axios.post(url, requestData, { headers: headers });
    console.log(response.data);
    const addImageToStory = await db.story.update({
      where: {
        id: storyId,
      },
      data: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        image_status_url: response.data.status_url as string,
      },
    });
    return addImageToStory;
  } catch (error) {
    console.error(error);
  }
};

const getTextToImagePrompt = async (description: string) => {
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
      text: `given a description of someone's story, please provide a short sentence that would fit as a prompt to generate a good image by a text to image AI. the description: ${description}`,
    },
  };

  const { data }: { data: TextCortexResponse } =
    await axios.request(promptOptions);

  return data.data.outputs[0]?.text;
};

export async function POST(request: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { description, id }: { description: string; id: string } =
    await request.json();

  try {
    const textToImagePrompt = await getTextToImagePrompt(description);

    if (!textToImagePrompt) throw Error;
    // else
    const getImage = await textToImage(id, textToImagePrompt);
    return NextResponse.json(getImage, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

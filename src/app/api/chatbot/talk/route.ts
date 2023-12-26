import type TextCortexResponse from "@/types/TextCortex";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";
import { env } from "process";

const talkToAI = async (prompt: string) => {
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
      text: `You are a Palestinian reporter named PalChat. Given a message from a user, respond to it as if you are a Palestinian reporter who knows a lot about Palestine and can answer any question about it with elegance and kindness, while also keeping it short (less than 6-7 lines max) and maintaining the constant support for Palestine. The message is: ${prompt}`,
    },
  };

  const { data }: { data: TextCortexResponse } =
    await axios.request(promptOptions);

  return data;
};

export async function POST(request: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { prompt }: { prompt: string } = await request.json();
  try {
    const getAIResponse = await talkToAI(prompt);

    return NextResponse.json(getAIResponse.data.outputs[0]?.text, {
      status: 200,
    });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

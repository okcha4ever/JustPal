import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const stories = await db.story.findMany({
      ...(id && {
        where: { id },
      }),
    });
    return NextResponse.json(stories, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

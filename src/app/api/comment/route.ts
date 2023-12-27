import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { content, userId, storyId } = await request.json();
  try {
    const createComment = await db.comment.create({
      data: {
        content,
        userId,
        storyId,
      },
    });
    return NextResponse.json("done", { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

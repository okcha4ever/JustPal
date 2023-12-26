import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    if (id) {
      await db.story.delete({
        where: {
          id: id,
        },
      });

      return NextResponse.json("done", { status: 200 });
    } else {
      return NextResponse.json("please provide a story id to delete", {
        status: 200,
      });
    }
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const image_status_url = searchParams.get("image_status_url");

  const headers = {
    accept: "application/json",
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ijg2ZGM3OTk4MzkwNWZiOTA4M2YxNzc2OWY5ODAzMDA3IiwiY3JlYXRlZF9hdCI6IjIwMjMtMTItMjVUMjM6MDI6NTcuODk3MDc4In0.IZ-nO7ylnvUmy3MSQ1_pcH9nmnRhFDXxJdeGKOZjKD8",
    "content-type": "application/json",
  };
  try {
    if (!image_status_url) return;
    const { data }: { data: unknown } = await axios.get(image_status_url, {
      headers: headers,
    });
    console.log(data);

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

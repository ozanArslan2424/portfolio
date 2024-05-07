import { sendMail } from "@/lib/mail-service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    if (!body) {
      throw new Error("Request body is empty");
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      throw new Error("Invalid JSON data");
    }

    const { name, email, message } = data;

    await sendMail(name, email, message);
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error("Error: ", error);
    return new NextResponse(null, { status: 500 });
  }
}

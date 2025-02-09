import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET /api/test called");
  return NextResponse.json({ message: "GET Success!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log("POST /api/test called with body:", body);
  return NextResponse.json({ message: "POST Success!", data: body });
}

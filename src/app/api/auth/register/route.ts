import clientPromise from "@/lib/MongodbClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(password, 10);

    const client = await clientPromise;
    const db = client.db();

    const doesEmailExist = await db
    .collection("users")
    .findOne({ email: email });

    if (doesEmailExist) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }

    const createAccount = await db
      .collection("users")
      .insertOne({ email: email, password: hashedPassword });

    return NextResponse.json({ success: "Account created" }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

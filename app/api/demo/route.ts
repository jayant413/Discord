import { DBConnect } from "@/lib/db";
import { Product } from "@/lib/model/demo";
import { NextResponse } from "next/server";

export async function GET() {
  const conndb: { status: Boolean; message: String } = await DBConnect();

  if (conndb.status) {
    const data = await Product.find();
    return NextResponse.json({ result: true, conndb, data });
  } else {
    return NextResponse.json({
      result: false,
      error: conndb.message,
      message: "Something went wrong",
    });
  }
}

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    const externalApiUrl =
      "https://user-639859377017.us-central1.run.app/signup";

    const response = await fetch(externalApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Signup successful",
        data: result.user,
      });
    } else {
      return NextResponse.json(
        { success: false, message: result.error || "Signup failed" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Signup failed:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred during Signup" },
      { status: 500 }
    );
  }
}

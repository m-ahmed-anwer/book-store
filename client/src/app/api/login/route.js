import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const externalApiUrl =
      "https://user-639859377017.us-central1.run.app/login";

    const response = await fetch(externalApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Login successful",
        data: result.user,
      });
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Login failed" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Login failed:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred during login" },
      { status: 500 }
    );
  }
}

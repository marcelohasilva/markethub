import { NextResponse } from "next/server";

const DEFAULT_API_BASE_URL = "http://localhost:8000";

export async function GET() {
    const baseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL;
    const url = `${baseUrl.replace(/\/$/, "")}/products`;

    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: response.status }
        );
    }

    const data = await response.json();
    return NextResponse.json(data);
}

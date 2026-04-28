import { NextResponse } from "next/server";

const DEFAULT_API_BASE_URL = "http://localhost:3000";

export async function POST(request: Request) {
    const baseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL;
    const url = `${baseUrl.replace(/\/$/, "")}/v1/users`;

    try {
        const body = await request.json();
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                {
                    error: "Failed to create user",
                    status: response.status,
                    details: data,
                },
                { status: response.status }
            );
        }

        return NextResponse.json(data);
    } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json(
            { error: "Failed to reach users service", details: message },
            { status: 502 }
        );
    }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const webhookUrl = "https://n8n.rayo.consulting/webhook/contact-form";

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        // Get the response text first to debug potential issues
        const responseText = await response.text();

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            // If response is not JSON, return it as is or handle error
            console.error("Webhook response is not JSON:", responseText);
            return NextResponse.json(
                { error: "Invalid response from webhook", details: responseText },
                { status: 502 }
            );
        }

        if (!response.ok) {
            return NextResponse.json(data, { status: response.status });
        }

        return NextResponse.json(data);

    } catch (error) {
        console.error("Error in contact form proxy:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

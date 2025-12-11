import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real application, you would save this to a database (e.g., PostgreSQL, MongoDB)
        // or send an email using a service like Resend, SendGrid, or AWS SES.
        // For now, we will log it to the server console to demonstrate "actual submission".
        console.log("----- NEW SUBMISSION RECEIVED -----");
        console.log("Type:", body.type);
        console.log("Contact:", body.contactName, `<${body.contactEmail}>`);
        console.log("Payload:", JSON.stringify(body.payload, null, 2));
        console.log("-----------------------------------");

        return NextResponse.json({ success: true, message: "Submission received" });
    } catch (error) {
        console.error("Submission error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process submission" },
            { status: 500 }
        );
    }
}

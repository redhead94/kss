import { draftMode } from "next/headers";

export async function POST() {
    (await draftMode()).enable();
    return new Response("Draft mode enabled");
}

export async function DELETE() {
    (await draftMode()).disable();
    return new Response("Draft mode disabled");
}
"use server"
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function getClient () {
    const session = await getServerSession(authOptions);
    return session;
}


// route.ts

import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

// Define the handler using NextAuth with the provided authOptions
const handler = NextAuth(authOptions);

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };

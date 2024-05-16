import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongoDB";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

export const authOptions:AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            
          }),
    ],
    adapter: MongoDBAdapter(clientPromise) as Adapter,
};
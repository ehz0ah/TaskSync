import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../lib/mongoDB"
import { NextResponse } from "next/server"

export interface UserData {
    name: string
    email: string
    image: string
    emailVerified: null
  }

  export async function GET(Request: Request) {
    const client = await clientPromise.then()
    const cursor = client.db("tasksync").collection<UserData>("users").find({});
    const documents = await cursor.toArray();
    const usersData = documents.map((document) => ({
      name: document.name,
      email: document.email,
      image: document.image,
      emailVerified: document.emailVerified
    }))
    return NextResponse.json({usersData})
  }
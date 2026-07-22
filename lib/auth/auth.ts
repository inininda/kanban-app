import { betterAuth } from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { MongoClient } from "mongodb"
import { redirect } from "next/navigation"

// async function that allows you to read the HTTP incoming request headers from a server component
import { headers } from "next/headers"

const client = new MongoClient(process.env.DB_URI!)
const db = client.db()

// only use in server side stuff
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  // better auth automatically handle the data integration with database
  emailAndPassword: {
    enabled: true,
  },
})

export async function getSession() {
  const result = await auth.api.getSession({
    headers: await headers()
  })

  return result
}

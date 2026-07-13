"use client"
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

// TODO: fix the styling later

export default function SignIn() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Enter your credential to access your account
          </CardDescription>
        </CardHeader>
        <form action="">
          <CardContent>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="Email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                minLength={8}
                placeholder="...."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Sign In</Button>
            <p>
              Don't have an account? <Link href="/sign-up">Sign Up</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

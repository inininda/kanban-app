"use client"
import { Button } from "./ui/button"
import { signOut } from "@/lib/auth/auth-client"
import { useRouter } from "next/navigation"

export default function SignOutButton() {
  const router = useRouter()

  async function handleLogout() {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/sign-in") // redirect to login page
          },
        },
      })
    } catch (error) {
      // TODO: handle error later
      console.log(error)
    }
  }

  return <Button onClick={handleLogout}>Sign Out</Button>
}

import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { getSession } from "@/lib/auth/auth"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar"
import SignOutButton from "./sign-out-btn"

export default async function Navbar() {
  const session = await getSession()

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex item-center gap-4">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {session.user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      <div>
                        <p>{session.user.name}</p>
                        <p>{session.user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                      <SignOutButton />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Log In
                </Button>
              </Link>
              <Link href="sign-up">
                <Button className="text-white hover:text-black">
                  Start For Free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

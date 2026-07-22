import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";
import { RBAC } from "./lib/middleware/RBAC";
import { ROLES } from "./lib/middleware/roles.permission";

const rbac = new RBAC()

export default async function proxy(request: NextRequest) {
    const session = await getSession()
    const url = request.nextUrl.pathname
    const method = request.method
    const isAuthenticated = !!session?.user

    const validate = rbac.validate(isAuthenticated ? ROLES.USER : ROLES.GUEST, method + " " + url)

    if (!validate) {
        if (isAuthenticated) {
            return NextResponse.redirect(new URL("/dashboard", request.url))
        }
        return NextResponse.redirect(new URL("/sign-in", request.url))
    }

    return NextResponse.next()
}
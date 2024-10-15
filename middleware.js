import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
    if (!req.auth) {
        console.log(req.auth)
        console.log(req.nextUrl)
        if (req.nextUrl.pathname.includes('admin')) {
            const newUrl = new URL("/admin/login", req.nextUrl.origin)
            return Response.redirect(newUrl)
        }
        if (req.nextUrl.pathname != "/login") {
            const newUrl = new URL("/login", req.nextUrl.origin)
            return Response.redirect(newUrl)
        }
    }

})

// Manage list of protected routes
export const config = {
    matcher: [
        "/popular-table",
        "/dashboard",
        "/virtual-table",
        "/profile",
        "/profile/edit",
        "/profile/edit/info",
        "/profile/edit/picture",
        '/admin/settings/:path*',
        '/admin/dashboard/:path*'
    ],
};

import { NextResponse } from "next/server";
import { verify } from "./utils/getUserFromToken";

const middleware = async (request) => {
  const path = request.nextUrl.pathname;
  const token = request.cookies?.get("token")?.value || "";
  const user = await verify(token);

  const authPath = ["/auth/login", "/auth/register"];
  const securePath = ["/wish-list", "/orders", "/profile"];
  const adminPath = [
    "/dashboard",
    "/dashboard/admins",
    "/dashboard/managers",
    "/dashboard/users",
    "/dashboard/products",
    "/dashboard/add-products",
    "/dashboard/orders",
    "/dashboard/delivered",
  ];
  const isAdmin = user?.role === "admin";

  if (user && authPath.includes(path)) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!user && securePath.includes(path)) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }

  if (!isAdmin && adminPath.includes(path)) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
};

export const config = {
  matcher: [
    "/",
    "/auth/:path*",
    "/wish-list",
    "/orders",
    // "/profile",
    "/dashboard",
    "/dashboard/:path*",
  ],
};

export default middleware;

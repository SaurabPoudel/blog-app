import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
});
console.log("middleware running");

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

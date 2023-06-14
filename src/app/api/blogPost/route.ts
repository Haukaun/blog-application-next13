import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET() {
  const blogPosts = await prisma.blogPost.findMany({
    include: {
      user: true,
    },
  });
  return new Response(JSON.stringify(blogPosts));
}

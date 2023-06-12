import prisma from "@/lib/prisma";

export async function GET() {
  const blogPosts = await prisma.blogPost.findMany({
    take: 3,
  });
  return new Response(JSON.stringify(blogPosts));
}

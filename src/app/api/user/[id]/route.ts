import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const userBlogPost = await prisma.blogPost.findMany({
    where: {
      userId: +params.id,
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userBlogPost));
}

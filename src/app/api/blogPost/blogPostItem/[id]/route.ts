import { prisma } from "@/lib/prisma";

///Get all items by blogPostId
export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const blogPostItems = await prisma.blogPostItem.findMany({
    where: {
      blogpostId: +params.id,
    },
  });

  return new Response(JSON.stringify(blogPostItems));
}

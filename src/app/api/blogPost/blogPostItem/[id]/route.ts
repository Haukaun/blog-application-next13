import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  //get items by blogPostId
  const blogPostItem = await prisma.blogPostItem.findMany({
    where: {
      blogpostId: +params.id,
    },
  });

  return new Response(JSON.stringify(blogPostItem));
}

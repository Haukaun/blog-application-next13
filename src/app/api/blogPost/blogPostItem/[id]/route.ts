import prisma from "@/lib/prisma";

export async function GET({ params }: { params: { postId: number } }) {
  const blogPostItem = await prisma.blogPostItem.findMany({
    where: {
      blogpostId: +params.postId,
    },
  });
  return new Response(JSON.stringify(blogPostItem));
}

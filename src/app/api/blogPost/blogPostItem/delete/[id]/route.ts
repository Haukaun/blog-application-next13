///delete blogpostitem

import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const blogPostItem = await prisma.blogPostItem.delete({
    where: {
      id: +params.id,
    },
  });

  return new Response(JSON.stringify(blogPostItem));
}

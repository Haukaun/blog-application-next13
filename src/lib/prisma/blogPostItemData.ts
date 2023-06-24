import prisma from "@/lib/prisma";

///Get all items by blogPostId
export async function getBlogItemsById(id: number) {
  return await prisma.blogPostItem.findMany({
    where: {
      blogpostId: id,
    },
  });
}

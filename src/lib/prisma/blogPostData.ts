import prisma from "@/lib/prisma";

export async function getAllPosts() {
  return await prisma.blogPost.findMany();
}

export async function getPostBySlug(slug: string) {
  return await prisma.blogPost.findFirst({
    where: {
      slug: slug,
    },
    include: {
      user: true,
    },
  });
}

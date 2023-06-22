import prisma from "@/lib/prisma";

///This lib is more for tesing purposes, but it can be used to get data from the database.
///Using getallposts and getpostbyslug in the blogPost/[slug].tsx file.

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
      items: true,
    },
  });
}

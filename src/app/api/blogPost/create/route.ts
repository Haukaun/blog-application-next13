import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { BlogPostProps } from "@/lib/types/interfaces";

export async function POST(request: Request) {
  const accessToken = request.headers.get("Authorization");

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "You must be authorized",
      }),
      {
        status: 401,
      }
    );
  }

  const body: BlogPostProps = await request.json();

  const blogPost = await prisma.blogPost.create({
    data: {
      title: body.blogPost.title,
      subTitle: body.blogPost.subTitle,
      content: body.blogPost.content,
      slug: body.blogPost.slug,
      userId: body.blogPost.userId,
      image: body.blogPost.image,
    },
    include: {
      user: true,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
